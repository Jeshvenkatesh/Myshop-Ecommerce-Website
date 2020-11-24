import react from 'react';
import { Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formWrapper:{
        width:'40rem',
        marginBottom:'30px',
    },
    textField:{
     marginBottom:'20px'
    },
    button:{
        width:'100%',
        textAlign:'center'
    }
        
}))

const Shipping = (props) => {

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data ={
            name: e.target.FullName.value,
            doorno:e.target.Doorno.value,
            Street: e.target.Street.value,
            City: e.target.City.value,
            State: e.target.State.value,
            pincode: e.target.Pincode.value
        }
        console.log(JSON.stringify(data));
        localStorage.setItem('shippingaddress',JSON.stringify(data));
        props.handleMOdal(true);
        e.target.reset();
    };

    return (
        <Box className={classes.formWrapper}>
                <Box component="h2" varient="h2">Shipping Details</Box>
            <form onSubmit={handleSubmit}>
            <TextField className={classes.textField} fullWidth type="text" required name="FullName" label="Full Name" variant="outlined"   />
            <TextField className={classes.textField} fullWidth type="text" required name="Doorno" label="Door No" variant="outlined"  />
            <TextField className={classes.textField} fullWidth type="text" name="Street" label="Street" variant="outlined"  />
            <TextField className={classes.textField} fullWidth type="text" required name="City" label="City" variant="outlined"  />
            <TextField className={classes.textField} fullWidth type="text" name="State" label="State" variant="outlined"  />
            <TextField className={classes.textField} fullWidth type="number" required name="Pincode" label="Pincode" variant="outlined"  />
             <Box className={classes.button}>
             <Button  variant="contained" color="primary" type="submit">Next</Button>
             </Box>
            </form>
        </Box>
    )
}

export default Shipping;
