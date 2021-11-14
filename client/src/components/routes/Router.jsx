import React from 'react';

import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Login from "../../pages/auth/login";

function Routes () {
    return(
       <Router>
            <Switch>
                <Route exact path={"/"} 
                element={
                    <div className="body-login text-center">
                        <Login/>
                    </div>} 
                />
                <Route
                    path={"*"}
                    component={() => (
                        <h1 style={{ marginTop: 300 }}>
                            404
                        <br />
                        Pagina no encontrada
                        </h1>
                    )}
                />
            </Switch>
       </Router>
    )
};

export default Routes;