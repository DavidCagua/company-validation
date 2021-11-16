import React from "react";
import "./Card.css";
import clock from "../clock.svg";
import icon from "../img1.svg";

function Card() {
  return (
    <div className="Card">
      <div className="FrameUp">
        <div className="FrameImage">
          <img src={icon} />
        </div>
        <p>Solcitudes de creacion de empresas</p>
      </div>
      <div className="FrameDown">
        <hr />
        <p>
          <img src={clock} /> 2 solicitudes sin tratar{" "}
        </p>
      </div>
    </div>
  );
}

export default Card;
