import React from "react";

import './nav.css';

function Nav(params) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xl">
                <div className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Munchique</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Item</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;