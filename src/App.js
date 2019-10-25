import React from "react";
import "./App.css";

import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import Jumb from "./components/JumbComponent";
import ComoFunciona from "./components/ComoFuncionaComponent";
import Personalize from "./components/PersonalizeComponent";
import Ganhe from "./components/GanheComponent";
import Form from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Jumb />
      <Personalize />
      <Ganhe />
      <ComoFunciona />
      <Form />
    </div>
  );
}

export default App;
