import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../../pages/login/login";
import Home from '../../pages/home/home';
import Products from '../../pages/ProductsDetails/productsDetails';
import EditProduct from '../../pages/ProductsDetails/editProduct';
import PrivateRoute from '../auth/privateRoute';
import PageNotFound from '../../pages/error/pageNotFound/pageNotFound';
import Unauthorized from '../../pages/error/unauthorized/unauthorized';

function Routes () {
    return(
       <Router>
            <Switch>                
                <Route exact path={["/"]} component= {Login}/>                          
                <PrivateRoute exact path="/home" component={Home}/>
                <PrivateRoute exact path="/productsDetails" component={Products}/>
                <Route exact path="/editProduct/editID/:id" component={EditProduct} />
                <Route exact path={"/unauthorized"} component={Unauthorized} />
                <Route path={"*"} component={PageNotFound} />                
            </Switch>
       </Router>
    )
};

export default Routes;