import React from "react";
import "./App.css";

import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import NossoObjetivo from "./components/NossoObjetivoComponent";
import ComoFunciona from "./components/ComoFuncionaComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NossoObjetivo />
      <ComoFunciona />
    </div>
  );
}

export default App;
