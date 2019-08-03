import React from "react";
import "./App.css";
import NavBar from "./components/NavBarComponent";
import Banner from "./components/BannerComponent";
import NossoObjetivo from "./components/NossoObjetivoComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NossoObjetivo />
    </div>
  );
}

export default App;
