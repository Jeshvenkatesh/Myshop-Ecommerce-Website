import React, { useEffect, useState } from 'react';
import Topbar from "./utils/Topbar/Topbar";
import { Box } from "@material-ui/core";
import Footer from "./utils/Footer/Footer";
import HomePage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";
import Buildingpage from "./Pages/Buildingpage";
import ProductDetails from "./Pages/Productpage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from "../src/utils/signup/login";


function App() {

  const [login, setLogin] = React.useState(false);

  const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  const handleloginModal = (arg) => {
    setLogin(arg)
  }
  const handleRegisterModel = (arg) => {
    setLogin(arg)
  }

  return (
    <BrowserRouter>
      <Box>
        <Topbar handleOpen={handleOpen} />
        <LoginForm handleloginModal={handleloginModal} login={login} handleRegisterModel={handleRegisterModel} open={open} handleClose={handleClose} />
        <Switch>
         <Route exact path="/cartpage" component={Cartpage} />
         <Route exact path="/details/:pid" component={ProductDetails}/>
         <Route exact path="/buildingpage" component={Buildingpage} />
         <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
