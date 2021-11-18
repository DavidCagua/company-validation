import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="Card_wrapper">
        <Card
          img={img1}
          title="Solicitudes de creación de empresas"
          status="2 solicitudes sin tratar"
        />
        <Card
          img={img2}
          title="Indicadores"
          status="Visitado por última vez: 31/01/2020"
        />
        <Card
          img={img3}
          title="Inscripción de empleados en empresas"
          status="3 usuarios sin empresa registrada"
        />
        <Card
          img={img4}
          title="Gestión de usuarios"
          status="532 usuarios activos en la plataforma"
        />
      </div>
    </Fragment>
  );
}

export default App;
