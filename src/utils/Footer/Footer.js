import React from 'react';
import { Box, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    footerWrapper: {
        width: '100%',
        height: "200px",
        background: '#f44336',
        color: "white",
        marginTop: '60px',
        paddingTop: '30px',
        paddingBottom: '30px',
        boxSizing: 'boderBox'
    },
    footerContent:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'

    }

}))


const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.footerWrapper}>
            <Container>
                <Box className={classes.footerContent}>
                    <div>
                        <h3>ONLINE STORE</h3>
                        <p>MEN CLOTHING</p>
                        <p>WOMEN CLOTHING</p>
                        <p>MEN ACCESSORIES</p>
                    </div>
                    <div>
                        <h3>HELPFUL LINKS</h3>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>CONTACT</p>
                    </div>
                    <div>
                        <h3>PARTNERS</h3>
                        <p>ZARA</p>
                        <p>PANTALOONS</p>
                        <p>LEVIS</p>
                    </div>
                    <div>
                        <h3>ADDRESS</h3>
                        <p>BUILDING 101</p>
                        <p>CENTRAL AVENUE</p>
                        <p>LA-902722</p>
                    </div>
                </Box>

            </Container>
        </Box>
    )
}

export default Footer;