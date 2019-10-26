import React from "react";

const ComoFunciona = () => (
  <div className="container mt-5 mb-5" id="vantagens">
    <br />
    <h1 className="display-4 text-center my-5">Principais Vantagens</h1>
    <div className="row">
      <div className="col-12 col-lg-3 col-md-6">
        <p className="text-center">
          <i class="fas fa-piggy-bank icon"></i>
        </p>
        <h3 className="text-center">
          Redução <br />
          de custos
        </h3>
      </div>
      <div className="col-12 col-lg-3 text-left col-md-6">
        <p className="text-center">
          <i class="fas fa-tools icon"></i>
        </p>
        <h3 className="text-center">Personalização</h3>
      </div>
      <div className="col-12 col-lg-3 col-md-6">
        <p className="text-center">
          <i class="fas fa-award icon"></i>
        </p>
        <h3 className="text-center">Qualidade de atendimento</h3>
      </div>
      <div className="col-12 col-lg-3 col-md-6">
        <p className="text-center">
          <i class="fas fa-pencil-ruler icon"></i>
        </p>
        <h3 className="text-center">Métricas e relatórios personalizados</h3>
      </div>
    </div>
  </div>
);

export default ComoFunciona;
