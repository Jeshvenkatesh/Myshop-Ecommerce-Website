import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Container, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Creditcard from "../Components/CreditCard/Creditcatrd";
import Shipping from "../Components/ShippingInfo/Shippinginfo";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { withRouter } from 'react-router-dom';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({

    modalWrapper: {
        width: '30rem'
    },
    circleWrapper: {
        width: '100%',
        height: '100%',
        color: "green",
        textAlign: 'center',
        paddingTop: '10rem'
    },
    
}))


const Buildingpage = (props) => {

    const classes = useStyles();

    const [modal, setModal] = useState(false)
    const [amount, setAmount] = useState(0)
    const [address, setAddress] = useState({})
    const [message, setMessage] = useState(false)

    const handleModal = (arg) => {
        setModal(arg)
        const totalAmount = localStorage.getItem('TotalAmount')
        const address = JSON.parse(localStorage.getItem('shippingaddress'))
        setAmount(totalAmount)
        setAddress(address)
    }

    const handleConfirmOrder = () => {

        //  NOte:  DELETE CART FUNCTIONALITY ==> here but MOClAPI not supported to delete all at once, we can delete only based on id;
       //    so that i commented the code!

        // const url = "https://5fb918062f145f0016c3caba.mockapi.io/cartdata"
        // Axios.delete(url)
        //     .then((response) => {
        //         console.log(response.data)

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        
        setModal(false)
        setMessage(true)
        setTimeout(()=>{
            props.history.push('/')
        },2000)
    }

    const handleModalClose = () => {
        setModal(false)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <Box >
            {
                message === true ?
                    <Box className={classes.circleWrapper}>
                        <Box>
                            < CheckCircleRoundedIcon style={{ color: green[500], fontSize: "15rem" }} />
                            <Box varient="h2" component="h2" >Order has been placed successfully!</Box>
                        </Box>
                    </Box>
                    :
                    <Box>
                        <Container>
                            <Creditcard />
                            <Shipping handleMOdal={handleModal} />
                        </Container>
                        <Box >
                            <Dialog onClose={handleModalClose} open={modal}>
                                <DialogTitle className={classes.modalWrapper}>Confirm</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Total Amount : ${amount}</DialogContentText>
                                </DialogContent>
                                <DialogTitle>Shipping Address</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Name : {address.name} </DialogContentText>
                                    <DialogContentText>Door No : {address.doorno} </DialogContentText>
                                    <DialogContentText>City : {address.City} </DialogContentText>
                                    <DialogContentText>State : {address.State} </DialogContentText>
                                    <DialogContentText>Pincode : {address.pincode} </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button color="primary" onClick={handleConfirmOrder} >
                                        Order
                                    </Button>
                                    <Button color="secondary" onClick={handleModalClose}>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>

            }


        </Box>
    );
}

export default withRouter(Buildingpage);