import React from "react";
import "./App.css";

import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import Jumb from "./components/JumbComponent";
import NossoObjetivo from "./components/NossoObjetivoComponent";
import ComoFunciona from "./components/ComoFuncionaComponent";
import Form from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Jumb />
      <NossoObjetivo />
      <ComoFunciona />
      <Form />
    </div>
  );
}

export default App;
