import React from "react";

const Personalize = () => (
  <div className="container mt-5 mb-5" id="perso">
    <h1 className="text-center my-4">Personalize o seu atendimento</h1>
    <p class="text-muted text-center px-5 pb-3">
      Os chatbots permitem alta singularização. Para o usuário, fica a sensação
      de estar realmente falando com outra pessoa. Para a empresa, é um
      mecanismo que garante satisfação.
    </p>

    <div className="row mt-5">
      <div className="col-12 col-lg-4 col-md-12">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="fas fa-folder-open icon"></i>
            </h1>
            <h3 class="">Importe seus dados</h3>
            <p class="text-muted">
              Utilize suas perguntas frequentes, histórico de atendimento e base
              de conhecimento para construir as bases do seu Chatbot.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 text-left col-md-12">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="fas fa-dumbbell icon"></i>
            </h1>
            <h3 class="">Treine seu Chatbot</h3>
            <p class="text-muted">
              Seu Chatbot usa imediatamente estes dados e experiência para
              preparar-se para o atendimento aos seus clientes.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-12">
        <div class="card my-1">
          <div class="card-body">
            <h1 class="card-title">
              <i class="far fa-clipboard icon"></i>
              {/* fas fa-chart-line */}
            </h1>
            <h3 class="">Aprimore-o</h3>
            <p class="text-muted">
              Utilize os relátorios de atendimento para avaliar a eficiência do
              seu Chatbot e aplicar melhorias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Personalize;
