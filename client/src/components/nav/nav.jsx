import React from "react";
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
import Logo from '../Img/logo_munchique.png';


import './nav.css';

function Nav(params) {

    const cookies = new Cookies();

    function logout(){
        Swal.fire({
            icon:"warning",
            title:"Confirmacion",
            text: "¿Desea cerrar sesion?",
            showCancelButton: true,
            customClass:{
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secundary'
            }
        })
        .then((result) => {
            if (result.isConfirmed){
                cookies.remove("_s", {path: "/"});
                window.location.href = '/';
            };
        });
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
            <div className="container-xl">
                <img  className="img-logo" src={ Logo } alt="Logo"/>
                <div className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/home">Munchique</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/about">Proyecto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Productos</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light me-2" onClick={logout}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;