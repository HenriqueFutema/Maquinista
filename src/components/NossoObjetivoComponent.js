import React from "react";

import Test from "../assets/note1.jpg";

const NossoObjetivo = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col col-lg-6">
        <div className="mt-5 text-right">
          <h1 className="text-success display-4">Nosso Objetivo</h1>
          <p className="lead mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
            libero saepe eaque cupiditate accusantium eos quas sapiente illo
            assumenda quos enim
          </p>
        </div>
      </div>
      <div className="col col-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <img src={Test} alt="" srcset="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <img src={Test} alt="" srcset="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <img src={Test} alt="" srcset="" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <img src={Test} alt="" srcset="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NossoObjetivo;
