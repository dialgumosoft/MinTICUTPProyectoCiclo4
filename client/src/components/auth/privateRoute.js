import React, { useEffect, useState } from "react";
import {Route, Redirect } from 'react-router';
import { getSession } from '../helpers/helpers';

const checkAuth = () => {
    return !getSession() ? false : true;
}

function PrivateRoute(params) {
    const [auth, setAuth] = useState(false);
    const {component: Component, ...rest} = params;

    useEffect(() =>{
        function validarAuth() {
            setAuth(checkAuth() && !auth) ;
        }
        validarAuth();
    });

    return(
        <Route
            {...rest}
            render={(props) =>
                auth
                ?<Component {...props}/>
                :<Redirect 
                    to={{pathname: '/', state: {from: params.location}}}
                />
            }
        />
       
    );
};

export default PrivateRoute;