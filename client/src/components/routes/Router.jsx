import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../../pages/login/login";
import Home from '../../pages/home/home';
import PrivateRoute from '../auth/privateRoute';
import PageNotFound from '../../pages/error/pageNotFound/pageNotFound';
import Unauthorized from '../../pages/error/unauthorized/unauthorized';
import SignUp from '../../pages/signUp/signUp';

function Routes () {
    return(
       <Router>
            <Switch>                
                <Route exact path={["/"]} component= {Login}/>
                <Route exact path={["/signup"]} component= {SignUp}/>
                <PrivateRoute exact path="/home" component={Home}/>
                <Route exact path={"/unauthorized"} component={Unauthorized} />
                <Route path={"*"} component={PageNotFound} />                
            </Switch>
       </Router>
    )
};

export default Routes;