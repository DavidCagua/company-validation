import React from "react";
import Card from "./components/Card/Card";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import "./App.css";
import { Fragment } from "react";

const cardListData = [
  {
    id: 1,
    img: img1,
    title: "Solicitudes de creación de empresas",
    status: "2 solicitudes sin tratar",
  },
  {
    id: 2,
    img: img2,
    title: "Indicadores",
    status: "Visitado por última vez: 31/01/2020",
  },
  {
    id: 3,
    img: img3,
    title: "Inscripción de empleados en empresas",
    status: "3 usuarios sin empresa registrada",
  },
  {
    id: 4,
    img: img4,
    title: "Gestión de usuarios",
    status: "532 usuarios activos en la plataforma",
  },
];

function App() {
  return (
    <Fragment>
      <div className="Card_wrapper">
        {cardListData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
