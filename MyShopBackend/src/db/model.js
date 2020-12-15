const mongoose = require('mongoose');
const validator = require('validator');

const dataModel = mongoose.model("posts",{

    brand:{
       type :String,
       trim:true
    },
    description:{
        type:String,
        trim:true
    },
    name:{
        type:String,
        trim:true
    },
    preview:{
        type:String,
        trim : true
    },
    price:{
        type:Number,
        trim:true
    }

})

module.exports = dataModel;