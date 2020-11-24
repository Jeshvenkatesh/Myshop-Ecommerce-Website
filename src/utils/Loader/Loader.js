import React from 'react';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    loaderWrapper: {
        textAlign: 'center'
    },
}))

const LoaderWrapper = () => {

    const classes = useStyles();

    return (
        <div>
            <Loader className={classes.loaderWrapper} type="ThreeDots" timeout={1000} color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default LoaderWrapper;