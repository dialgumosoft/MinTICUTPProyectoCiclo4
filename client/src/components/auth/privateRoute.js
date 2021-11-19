import React from 'react';
import { Route, Redirect } from 'react-router';
import { getSession } from '../helpers/helpers';

function PrivateRoute(params) {
    const {component: Component, ...rest} = params;
    
    return(
        <Route
            {...rest}
            render={(props) =>
                getSession()
                ?<Component {...props}/>
                :<Redirect 
                    to={{pathname: '/unauthorized', state : {from : props.location}}}
                />
            }
        />
       
    );
};

export default PrivateRoute;