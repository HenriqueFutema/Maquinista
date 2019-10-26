import React from "react";

const Banner = () => (
  <div className="container" id="banner">
    <div className="row mt-3">
      <div className="col-lg-1"></div>
      <div className="col-12 col-lg-10 col-md-12 text-center">
        <div className="ml-5 mt-5">
          <h1 className="display-4">Maquinista</h1>
          <p className="lead mt-3">
            Se junte a nós e veja o nível de satisfação dos seus clientes
            aumentarem, criamos chatbots personalizados para a sua empresa que
            vão suprir suas necessidades, seja um bot informativo, um
            questionador ou algo mais específico, conte conosco para lhe ajudar
          </p>
          <a href="http://maquinista.herokuapp.com/">
            <button className="btn button-cor px-4 mt-3 text-white mb-5">
              Ver Mais
            </button>
          </a>
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  </div>
);

export default Banner;
