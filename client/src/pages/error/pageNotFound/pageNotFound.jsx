import React from "react";
import './pageNotFound.css';

function PageNotFound(params) {
    
    return(
        <div className="d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
               
                <div className="px-3 mt-5">
                    <h1>Error 404</h1>
                    <p className="lead">Lo sentimos, la pagina que has buscado no existe.</p>
                    <p className="lead">
                        <a href="/" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                            Ir al inicio
                        </a>
                    </p>
                </div>
               
            </div>
        </div>
    )
};

export default PageNotFound;