import React from "react";
import Chat from "../assets/aaa.png";

export default function GanheComponent() {
  return (
    <div className="container mt-5">
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
          <p class="text-muted pb-3">
            Os chatbots permitem alta singularização. Para o usuário, fica a
            sensação de estar realmente falando com outra pessoa. Para a
            empresa, é um mecanismo que garante satisfação.
          </p>
        </div>
      </div>
    </div>
  );
}
