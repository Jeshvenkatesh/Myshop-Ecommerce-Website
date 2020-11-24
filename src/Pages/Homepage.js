import React, { useEffect, useState } from 'react';
import Banner from "../Components/Banner/Banner";
import CardSection from "../Components/Cards/Cards";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        minHeight: '100vh'
    }
}))

const HomePage = () => {

    const classes = useStyles()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])


    return (
        <Box className={classes.mainWrapper}>
            <Banner />
            <CardSection />
        </Box>
    )
}

export default HomePage;