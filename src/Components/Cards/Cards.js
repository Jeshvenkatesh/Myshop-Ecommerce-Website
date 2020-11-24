import React, { useEffect, useState } from 'react';
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography, Box, Button } from "@material-ui/core";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../utils/Loader/Loader";



const useStyles = makeStyles((theme) => ({

    cardWrapper: {
        width: '16rem',
        marginTop: "40px"
    },
    cardContent: {
        height: '100px'
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    button: {
        textAlign:'center',
        paddingBottom:'1rem'
    }
}))


const CardSection = () => {

    const classes = useStyles();

    const [cardData, setCardData] = useState([]);

    const notify = (procuct) => toast(procuct + " has been added sucessfully");

    useEffect(() => {
        Axios.get("https://5fb918062f145f0016c3caba.mockapi.io/data")
            .then((response) => {
                console.log(response.data);
                console.log('print')
                setCardData([...response.data])
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

  

    const handleCardItems = (item) => {

        const procuct = item.name;
        const data = {
            contitem: { ...item },
            itemId: item.id,
            quantity: 1
        }
        console.log(data);
        const url = "https://5fb918062f145f0016c3caba.mockapi.io/cartdata"
        Axios.post(url, data)
            .then((response) => {
                console.log(response);
                notify(procuct)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const generateCards = cardData.map((item) => {

        return (
            <Box key={item.id} >
                <Card className={classes.cardWrapper}  >
                    <CardActionArea>
                        <Link to={`/details/${item.id}`}>
                        <CardMedia
                            component="img"
                            image={item.preview}
                        />
                        </Link>
                    </CardActionArea>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" component="h4">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> Price : ${item.price}</Typography>
                    </CardContent>
                    <Box className={classes.button}>
                        <Button onClick={() => { handleCardItems(item) }}
                            variant="outlined"
                            color="secondary"
                            size="medium"
                            endIcon={<AddShoppingCartIcon />}
                        > Add To Cart</Button>
                    </Box>
                </Card>
            </Box>
        )
    })
    return (
        <Box>
            <Loader />
            <ToastContainer />
            <Container>
                <Box className={classes.cardContainer}>
                    {generateCards}
                </Box>
            </Container>
        </Box>
    )
}

export default CardSection;