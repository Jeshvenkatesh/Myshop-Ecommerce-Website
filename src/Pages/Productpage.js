import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Box } from "@material-ui/core";
import classes from './product.module.css';


const ProductDetails = (props) => {

    const [card, setCard] = useState({})

    useEffect(() => {
        const productId = props.match.params.pid;
        Axios.get("https://5fb918062f145f0016c3caba.mockapi.io/data/" + productId)
            .then((response) => {
                // console.log(response.data);
                setCard({ ...response.data });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <Box className={classes.mainWrapper}>
            <Box>
                <img className={classes.ImgWrapper} src={card.preview} alt="product" />
            </Box>
            <Box>
                <h3>Name : {card.name}</h3>
                <p> Description : {card.description}</p>
                <p>Brand : {card.brand}</p>
                <p>Price : ${card.price}</p>
            </Box>
        </Box>
    )
}

export default ProductDetails;