import React from "react";
import Note from "../assets/note1.jpg";

const Banner = () => (
  <div className="container">
    <div className="row mt-3">
      <div className="col-12 col-lg-5 col-md-12">
        <div className="ml-5 mt-5">
          <h1 className="display-4">Maquinista</h1>
          <p className="lead mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure,
            libero saepe eaque cupiditate accusantium eos quas sapiente illo
            assumenda quos enim
          </p>
          <button className="btn button-cor px-4 mt-3 text-white mb-3">
            See More
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-12">
        <img src={Note} alt="" className="img-fluid" />
      </div>
    </div>
  </div>
);

export default Banner;
