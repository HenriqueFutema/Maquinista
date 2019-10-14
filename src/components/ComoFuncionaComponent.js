import React from "react";

import Ibm from "../assets/ibm4.png";
import Chat from "../assets/chat2.png";
import Lampada from "../assets/lampada.png";

const ComoFunciona = () => (
  <div className="container mt-5 mb-5">
    <h1 className="display-4 text-center my-5">How Works</h1>
    <div className="row">
      <div className="col-12 col-lg-4 col-md-4">
        <p className="text-center">
          <img src={Ibm} alt="" className="img-fluid mb-2" />
        </p>
        <h3>IBM Watson Assistent</h3>
        <p className="lead mt-1">
          We use IBM Watson to build our chatbot in the best way, making it
          recognize various intentions and perform diverse conversations.
        </p>
      </div>
      <div className="col-12 col-lg-4 text-left col-md-4">
        <p className="text-center">
          <img src={Chat} alt="" className="img-fluid mb-2" />
        </p>
        <h3>Chatbot</h3>
        <p className="lead mt-1">
          Our chatbot focuses to further the vocational assessment in
          enterprises and colleges in order to make the process quickier and
          with no time waste.
        </p>
      </div>
      <div className="col-12 col-lg-4 col-md-4">
        <p className="text-center">
          <img src={Lampada} alt="" className="img-fluid mb-2" />
        </p>
        <h3>Your Future</h3>
        <p className="lead mt-1">
          We from Maquinista worry about everybody's future, for this reason, we
          develop and platform wich helps to chose both a college or a job
        </p>
      </div>
    </div>
  </div>
);

export default ComoFunciona;
