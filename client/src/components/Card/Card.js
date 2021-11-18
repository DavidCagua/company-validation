import React from "react";
import "./Card.css";
import clock from "../../clock.svg";
import icon from "../../img1.svg";
import rectangle from "../../rectangle.png";

function Card() {
  return (
    <div className="Card">
      <div className="FrameUp">
        <img className="FrameImage" src={rectangle} alt="" />
        <img className="Image" src={icon} alt="" />
        <p>Solcitudes de creacion de empresas</p>
      </div>
      <div className="FrameDown">
        <hr />
        <p>
          <img src={clock} alt="" />
          <span> 2 solicitudes sin tratar</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
