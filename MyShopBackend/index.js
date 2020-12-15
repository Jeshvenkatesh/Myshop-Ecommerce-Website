const express = require('express');
const cors = require('cors');
require("./moongoose");
const dataModel = require("./src/db/model");

const app = express();

app.use(cors());

const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/posts',(req,res)=>{
    const data = new dataModel(req.body);
    data.save().then(()=>{
        res.status(201).send(data);
    }).catch((error)=>{
        res.status(400).send(error);
    })
});
app.get("/posts",(req,res)=>{
    dataModel.find({}).then((posts)=>{
        res.status(200).send(posts)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})
app.delete("/posts/:id",(req,res)=>{
    const _id = req.params.id;
    // const update = req.body;
    console.log(_id);
    dataModel.deleteOne({_id :_id}).then((post)=>{
        res.send(post)
    }).catch((e)=>{
        res.status(500).send(e)
    })
});
app.listen(port,(req,res)=>{
    console.log('server running at port :'+ port);
})