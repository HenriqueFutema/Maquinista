import React from "react";

// import { Container } from './styles';

export default function Form() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-4 mt-5">Entre em contato</h1>
          <form className="mt-3">
            <div className="form-group">
              <label>Nome:</label>

              <input
                class="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                class="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Mensagem :</label>

              <textarea className="form-control" rows="3" />
            </div>
            <button className="btn button-cor px-4 mt-3 text-white mb-3">
              Enviar
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h1>Entre em contato</h1>
        </div>
      </div>
    </div>
  );
}
