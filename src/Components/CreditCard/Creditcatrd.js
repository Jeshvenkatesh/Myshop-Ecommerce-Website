import React, { useEffect, useState } from 'react';
import { Box,Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const useStyles = makeStyles((theme) => ({
    mainWrapper:{
        width:"40rem",
        height:"fit-content",
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    container:{
      marginTop:'100px'
    },
    formWrapper : {
        display:'flex',
        flexWrap:'wrap',
        width:"20rem"
        
    },
    textField:{
      marginBottom:'10px'
    }
}))

const Creditcard = () => {

    const classes = useStyles();

    const [name, setName] = useState('');
    const [ number, setNumber] =useState('');
    const [ expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [cvc, setCvc ] = useState('')

        return (

          <div className={classes.container}>
                 <Box component="h2"  varient="h2">Credit Card Details</Box>
          <div id="PaymentForm" className={classes.mainWrapper}>
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />

            <form >
                <div className={classes.formWrapper}>
                <TextField 
                variant="outlined"
                type="tel"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={ e => setNumber(e.target.value)}
                onFocus={ e => setFocus(e.target.name)}
                className={classes.textField}
              />
              <TextField 
                variant="outlined"
                type="tel"
                name="name"
                placeholder="Card Holder Name"
                value={name}
                onChange={ e => setName(e.target.value)}
                onFocus={ e => setFocus(e.target.name)}
                className={classes.textField}
              />
              <TextField 
                variant="outlined"
                type="tel"
                name="expiry"
                placeholder="MM/YY Expiry"
                value={expiry}
                onChange={ e => setExpiry(e.target.value)}
                onFocus={ e => setFocus(e.target.name)}
                className={classes.textField}
              />
              <TextField 
                variant="outlined"
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={ e => setCvc(e.target.value)}
                onFocus={ e => setFocus(e.target.name)}
                className={classes.textField}
              />
              </div>
            </form>
          </div>
          </div>
        );

}

export default Creditcard;