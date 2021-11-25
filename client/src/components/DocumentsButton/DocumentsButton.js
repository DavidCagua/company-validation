import React from "react";
import "./DocumentsButton.css";
import clip from "../../Clip.svg";

function DocumentsButton() {
  return (
    <button className="DocumentsButton">
      <img src={clip} alt="validate" />
      <span>Ver archivos adjuntos</span>
    </button>
  );
}

export default DocumentsButton;
