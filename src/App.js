import React from "react";
import "./App.css";

import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import ComoFunciona from "./components/ComoFuncionaComponent";
import Personalize from "./components/PersonalizeComponent";
import Ganhe from "./components/GanheComponent";
import Reduza from "./components/ReduzaComponent";
import Form from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Ganhe />
      <Personalize />
      <Reduza />
      <ComoFunciona />
      <Form />
    </div>
  );
}

export default App;
