import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography, Box, Button } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({

    cardWrapper: {
        width: '35rem',
        marginBottom: "40px",
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardActionareWidth: {
        width: '10rem'
    },
    imgWrapper: {
        width: '50%'
    },
    mainWrapper: {
        marginTop: "150px",
        minHeight: "100vh"
    },
    button: {
        minWidth: 10,
    },

}))
const Cartpage = (props) => {

    const [cartData, setCartdata] = useState([]);
    const classes = useStyles();
    const notify = () => toast("Please select products to place order!");
    useEffect(() => {

        const url = "https://5fb918062f145f0016c3caba.mockapi.io/cartdata"
        Axios.get(url)
            .then((response) => {
                // console.log(response.data);
                setCartdata([...response.data])
            })
            .catch((err) => {
                console.log(err)
            })
        handleScroll();

    }, [])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const getCartData = () => {
        const url = "https://5fb918062f145f0016c3caba.mockapi.io/cartdata"
        Axios.get(url)
            .then((response) => {
                // console.log(response.data);
                setCartdata([...response.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handelRedirect = () => {
        const cartTotal = localStorage.getItem('TotalAmount')
        const amount = parseInt(cartTotal)
        //    console.log(typeof(cartTotal));
        if (amount === 0) {
            console.log('zero')
            notify();
            setTimeout(()=>{
                props.history.push('/')
            },2000)
        } else {
            props.history.push('/Buildingpage')

        }
    }

    const handleDeleteCartItem = (id) => {

        const url = "https://5fb918062f145f0016c3caba.mockapi.io/cartdata/" + id
        Axios.delete(url)
            .then((response) => {
                // console.log(response)
                getCartData()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const generateCartItems = cartData.map((item) => {
        return (
            <Box>

                <Card className={classes.cardWrapper} >
                    <CardActionArea className={classes.cardActionareWidth} >
                        <CardMedia
                            component="img"
                            image={item.contitem.preview}
                            title={item.contitem.brand}
                            className={classes.imgWrapper}
                        />
                    </CardActionArea>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="body1" component="p">
                            {item.contitem.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> Price : ${item.contitem.price}</Typography>
                    </CardContent>
                    <Box>
                        <Button
                            // variant="outlined"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            endIcon={<CancelIcon />}
                            onClick={() => { handleDeleteCartItem(item.id) }}
                        > </Button>
                    </Box>
                </Card>
            </Box>
        )
    })

    const generateTotalCartAmount = cartData.reduce((acc, item) => {
        acc = acc + item.contitem.price;
        return acc
    }, 0)

    localStorage.setItem("TotalAmount", generateTotalCartAmount);

    return (
        <Box className={classes.mainWrapper}>
            <ToastContainer />
            <Container>
                <h2>Welcome To Cart</h2>
                <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box>
                        {generateCartItems}
                    </Box>
                    <Box style={{ width: '25rem' }}>
                        <Card >
                            <CardContent >
                                <Typography variant="h6" color="textPrimary" component="h6"> Total Amount : ${generateTotalCartAmount}</Typography>
                            </CardContent>
                            <Box style={{ textAlign: 'center', marginBottom: "20px" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => { handelRedirect() }}
                                > Next </Button>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default withRouter(Cartpage);