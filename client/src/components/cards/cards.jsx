import React from "react";
import Card from "../../components/cards/card";
import "./cards.css";

function cards() {
  return (
    <div>
      <div>
        <p className="text">Nuestros Productos</p>
      </div>
      <Card />
    </div>
  );
}

export default cards;
