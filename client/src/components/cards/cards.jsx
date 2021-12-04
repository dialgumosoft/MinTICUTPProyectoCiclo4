import React from "react";
import Card from "./card";
import "bootstrap/dist/css/bootstrap.min.css";

function cards() {
  return (
    <div className="container">
      <h2 className="texto">Nuestros Productos</h2>
      <div className="row">
        <div className="card d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default cards;
