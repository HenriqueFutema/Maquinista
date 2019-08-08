import React from "react";

import Ibm from "../assets/ibm4.png";
import Chat from "../assets/chat2.png";
import Lampada from "../assets/lampada.png";

const ComoFunciona = () => (
  <div className="container mt-5 mb-5">
    <h1 className="display-4 text-center my-5">Como Funciona</h1>
    <div className="row">
      <div className="col-12 col-lg-4 col-md-4">
        <p className="text-center">
          <img src={Ibm} alt="" srcset="" className="img-fluid mb-2" />
        </p>
        <h3>IBM Watson Assistent</h3>
        <p className="lead mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
          libero saepe eaque cupiditate
        </p>
      </div>
      <div className="col-12 col-lg-4 text-left col-md-4">
        <p className="text-center">
          <img src={Chat} alt="" srcset="" className="img-fluid mb-2" />
        </p>
        <h3>Chat Bot</h3>
        <p className="lead mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
          libero saepe eaque cupiditate
        </p>
      </div>
      <div className="col-12 col-lg-4 col-md-4">
        <p className="text-center">
          <img src={Lampada} alt="" srcset="" className="img-fluid mb-2" />
        </p>
        <h3>O seu futuro</h3>
        <p className="lead mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
          libero saepe eaque cupiditate
        </p>
      </div>
    </div>
  </div>
);

export default ComoFunciona;
