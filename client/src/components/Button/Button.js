import React from "react";
import "./Button.css";
import validate from "../../validate.svg";
import reject from "../../reject.svg";

function Button({ state, documents, mobile, onClick }) {
  const styleTrue = {
    mobile: {
      position: "absolute",
      top: `${1000 + documents * 55}px`,
      left: "0",
      right: "0",
    },
    desktop: {
      position: "absolute",
      top: "80px",
      left: "660px",
    },
  };
  const styleFalse = {
    mobile: {
      position: "absolute",
      top: `${1080 + documents * 55}px`,
      left: "0",
      right: "0",
    },
    desktop: {
      position: "absolute",
      top: "160px",
      left: "660px",
    },
  };

  return (
    <button
      className="Button"
      style={
        mobile
          ? state
            ? styleTrue.mobile
            : styleFalse.mobile
          : state
          ? styleTrue.desktop
          : styleFalse.desktop
      }
      onClick={() => onClick(state)}
    >
      <img src={state ? validate : reject} alt="validate" />
      <span>{state ? "Aprobar Empresa" : "Rechazar Empresa"}</span>
    </button>
  );
}

export default Button;
