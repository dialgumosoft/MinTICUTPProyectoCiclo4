import React from "react";
import "./cards.css";

function card() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="../product/aguacate.jpeg" alt="" />
            <div className="card-body">
              <h4 className="card-title">Aguacate</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, veritatis quasi. Nemo sed explicabo amet eligendi at
                quibusdam eaque accusamus voluptatem ea soluta eveniet, tenetur
                voluptates repudiandae. Excepturi, explicabo quaerat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
