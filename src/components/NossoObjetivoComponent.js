import React from "react";

import Test from "../assets/note1.jpg";
import Lampada from "../assets/lm2.jpg";
import Formandos from "../assets/formandos.jpg";

const NossoObjetivo = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="mt-5 text-right">
          <h1 className="display-4 mt-5">Nosso Objetivo</h1>
          <p className="lead mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
            libero saepe eaque cupiditate accusantium eos quas sapiente illo
            assumenda quos enim
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-6 text-center">
        <div className="row">
          <img
            src={Lampada}
            alt=""
            className="img-fluid col-12 col-lg-6 col-md-6"
          />
          <img
            src={Formandos}
            alt=""
            className="img-fluid col-12 col-lg-6 col-md-6 "
          />
          <img
            src={Formandos}
            alt=""
            className="img-fluid col-12 col-lg-6 col-md-6 mt-2"
          />

          <img
            src={Lampada}
            alt=""
            className="img-fluid col-12 col-lg-6 col-md-6 mt-2"
          />
        </div>
      </div>
    </div>
  </div>
);

export default NossoObjetivo;
