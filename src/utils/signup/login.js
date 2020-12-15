import React from 'react';
import { Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { green,red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    formWrapper: {
        width: '30rem',
        height: "fit-content",
        marginBottom: '30px',
        background: "#fff",
        padding: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '10rem'
    },
    textField: {
        marginBottom: '10px'
    },
    button: {
        width: '100%',
        textAlign: 'center'
    }

}))

const LoginForm = (props) => {

    const classes = useStyles();

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        e.target.reset();
    };
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value
        }
        e.target.reset();
    }

    return (
        <div>
            <Modal aria-labelledby="modal-title"  open={props.open} onClose={props.handleClose} >
                {
                    props.login === true ?
                        <Box className={classes.formWrapper}>
                            <h2 id="modal-title">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <TextField className={classes.textField} fullWidth type="email" required name="email" label="Email" variant="outlined" />
                                <TextField className={classes.textField} fullWidth type="text" required name="password" label="Password" variant="outlined" />
                                <Box className={classes.button}>
                                    <Button variant="outlined" style={{ color: green[500] }} type="submit">Login</Button> <p>  OR  </p>
                                    <Button variant="none" onClick={()=>{props.handleRegisterModel(false)}} style={{ color: red[500] }} type="button">Register</Button>
                                </Box>
                            </form>
                        </Box>
                        :
                        <Box className={classes.formWrapper}>
                            <h2 id="modal-title">Register</h2>
                            <form onSubmit={handleRegisterSubmit}>
                                <TextField className={classes.textField} fullWidth type="text" required name="name" label="Full Name" variant="outlined" />
                                <TextField className={classes.textField} fullWidth type="email" required name="email" label="Email" variant="outlined" />
                                <TextField className={classes.textField} fullWidth type="text" required name="password" label="Password" variant="outlined" />
                                <Box className={classes.button}>
                                    <Button variant="outlined" style={{ color: green[500] }} type="submit">Register</Button> <p>  OR  </p>
                                    <Button variant="none" onClick={()=>{props.handleloginModal(true)}}  style={{ color: red[500] }}type="button">Login</Button>
                                </Box>
                            </form>
                        </Box>
                }
            </Modal>
        </div>
    )
}

export default LoginForm;