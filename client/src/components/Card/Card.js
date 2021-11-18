import React from "react";
import "./Card.css";
import clock from "../../clock.svg";
import rectangle from "../../rectangle.png";

function Card(props) {
  return (
    <div className="Card">
      <div className="FrameUp">
        <img className="FrameImage" src={rectangle} alt="" />
        <img className="Image" src={props.img} alt="imagen" />
        <p>{props.title}</p>
      </div>
      <div className="FrameDown">
        <hr />
        <p>
          <img src={clock} alt="status" />
          <span> {props.status}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
