import React from "react";
import "./Card.css";
import clock from "../../clock.svg";
import rectangle from "../../rectangle.png";
import { useNavigate } from "react-router-dom";

function Card({ img, title, status, url }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`${url}`);
  }
  return (
    <div className="Card" onClick={handleClick}>
      <div className="FrameUp">
        <img className="FrameImage" src={rectangle} alt="" />
        <img className="Image" src={img} alt="imagen" />
        <p>{title}</p>
      </div>
      <div className="FrameDown">
        <hr />
        <p>
          <img src={clock} alt="status" />
          <span> {status}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
