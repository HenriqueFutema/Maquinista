import React from "react";

import Chat from "../assets/chat2.png";
import Lampada from "../assets/lampada.png";

const Personalize = () => (
  <div className="container mt-5 mb-5">
    <h1 className="text-center my-4">Personalize o seu atendimento</h1>
    <p class="text-muted text-center px-5 pb-3">
      Os chatbots permitem alta singularização. Para o usuário, fica a sensação
      de estar realmente falando com outra pessoa. Para a empresa, é um
      mecanismo que garante satisfação.
    </p>

    <div className="row mt-5">
      <div className="col-12 col-lg-4 col-md-4">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="fas fa-folder-open icon"></i>
            </h1>
            <h3 class="">Importe seus dados</h3>
            <p class="text-muted">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 text-left col-md-4">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="fas fa-dumbbell icon"></i>
            </h1>
            <h3 class="">Treine seu Chatbot</h3>
            <p class="text-muted">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-4">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="fas fa-chart-line icon"></i>
            </h1>
            <h3 class="">Aprimore-o</h3>
            <p class="text-muted">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Personalize;
