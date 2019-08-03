import React from "react";
import Note from "../assets/note1.jpg";

const Banner = () => (
  <div className="container-fluid">
    <div className="row mt-3">
      <div className="col col-lg-5">
        <div className="ml-5 mt-5">
          <h1 className="text-success display-4">Maquinista</h1>
          <p className="lead mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
            libero saepe eaque cupiditate accusantium eos quas sapiente illo
            assumenda quos enim
          </p>
          <button className="btn btn-success px-4 mt-3">Ver Mais</button>
        </div>
      </div>
      <div className="col col-lg-6">
        <img src={Note} alt="" srcset="" className="img-fluid" />
      </div>
    </div>
  </div>
);

export default Banner;
