import React from 'react';
import { AppBar, Container, Tabs, Tab, Box, Toolbar, InputBase, Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({

    toolbarMargin: {
        marginTop: "60px"
    },
    tab: {
        minWidth: 15,
        marginLeft: 20
    },
    header:{
        cursor:'pointer',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "transparent",
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    IconsWrapper: {
        marginLeft: 'auto'
    },
    inputInput: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}))

const Topbar = (props) => {

    const classes = useStyles();

    const ElevationScroll = (props) => {
        const { children } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }
    const handelRedirect=()=>{
     
        props.history.push('/Cartpage')
    }
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Box >
                            <Container>
                                <Box className={classes.header} onClick={()=>{ props.history.push('/')}}>
                                <Box varient="h1" component="h2" >Myshop</Box>
                                </Box>
                            </Container>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Container>
                                <Tabs variant="scrollable">
                                    <Tab className={classes.tab} label="CLOTHING" />
                                    <Tab className={classes.tab} label="ACCESSORIES" />
                                    <Tab className={classes.tab} label="Electronics" />
                                    <Tab className={classes.tab} label="Offers Zone" />
                                </Tabs>
                            </Container>
                        </Box>
                        <Box className={classes.search}>
                            <Box className={classes.searchIcon}>
                                <SearchIcon />
                            </Box>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </Box>
                        <Box className={classes.IconsWrapper}>
                        <Tabs>
                                <Tab onClick={()=>{handelRedirect()}} className={classes.tab} icon={<ShoppingCartIcon />}  />
                                <Tab onClick={()=>{props.handleOpen()}} label="Login" className={classes.tab} />
                                {/* icon={<AccountCircleIcon />} */}
                            </Tabs>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default withRouter(Topbar);