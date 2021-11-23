import React from "react";
import "./Button.css";
import validate from "../../validate.svg";
import reject from "../../reject.svg";

function Button(props) {
  return (
    <button className="Button">
      <img src={props.Aproval ? validate : reject} alt="validate" />
      <span>{props.Aproval ? "Aprobar Empresa" : "Rechazar Empresa"}</span>
    </button>
  );
}

export default Button;
