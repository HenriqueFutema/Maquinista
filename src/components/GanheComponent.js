import React from "react";
import Chat from "../assets/aaa.png";

export default function GanheComponent() {
  return (
    <div className="container mt-5" id="ganhe">
      <div className="row">
        <div className="col-lg-6">
          <p className="text-center">
            <img src={Chat} />
          </p>
        </div>
        <div className="col-lg-6 mt-5">
          <br />
          <br />

          <h1 className="my-4">Ganhe mais tempo</h1>
          <p className="text-muted pb-3">
            Os chatbots registram as informações básicas das conversas e
            facilitam as resoluções, reduzindo o tempo de resposta e as filas de
            atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}
