import React from 'react';
import Topbar from "./utils/Topbar/Topbar";
import { Box } from "@material-ui/core";
import Footer from "./utils/Footer/Footer";
import HomePage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";
import Buildingpage from "./Pages/Buildingpage";
import ProductDetails from "./Pages/Productpage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Box>
        <Topbar />
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
