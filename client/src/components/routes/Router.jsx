import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../../pages/login/login";
import Home from '../../pages/home/home';
import PrivateRoute from '../auth/privateRoute';
import PageNotFound from '../../pages/error/pageNotFound/pageNotFound';

function Routes () {
    return(
       <Router>
            <Switch>                
                <Route exact path="/" component= {Login}/>                          
                <Route exact path="/home" component={Home}/>
                <Route path={"*"} component={PageNotFound} />
            </Switch>
       </Router>
    )
};

export default Routes;