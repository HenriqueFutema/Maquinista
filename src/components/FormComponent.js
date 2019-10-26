import React, { useState, useCallback } from "react";
import sweetalert from "sweetalert";

import firebaseDb from "../services/firebaseConfig";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (name !== "" || email !== "" || content !== "") {
        await firebaseDb
          .ref("suggestion")
          .push({ name: name, email: email, content: content })
          .then(data => {
            console.log(data);
            sweetalert(
              "Mensagem Enviada",
              "A Maquinista entrará em contato",
              "success"
            );
          })
          .catch(error => {
            console.log(error);
          });
      }

      setName("");
      setEmail("");
      setContent("");
    },
    [name, email, content]
  );

  return (
    <div className="container mt-5" id="contato">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="display-4 mt-5">Contato</h1>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome:</label>

              <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>

              <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder=""
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mensagem:</label>

              <textarea
                className="form-control"
                rows="3"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </div>
            <button
              className="btn button-cor px-4 mt-3 text-white mb-3"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
