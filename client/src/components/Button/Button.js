import React from "react";
import "./Button.css";
import validate from "../../validate.svg";
import reject from "../../reject.svg";

function Button({ state, nit, documents, mobile }) {
  const styleTrue = {
    mobile: {
      position: "absolute",
      top: `${960 + documents * 55}px`,
      left: "0",
      right: "0",
    },
    desktop: {
      position: "absolute",
      top: "38px",
      left: "660px",
    },
  };
  const styleFalse = {
    mobile: {
      position: "absolute",
      top: `${1040 + documents * 55}px`,
      left: "0",
      right: "0",
    },
    desktop: {
      position: "absolute",
      top: "120px",
      left: "660px",
    },
  };

  async function handleClick() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: state,
        nit: nit,
      }),
    };
    fetch("http://localhost:3001/company", requestOptions).then((response) =>
      console.log(response)
    );
  }

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
      onClick={handleClick}
    >
      <img src={state ? validate : reject} alt="validate" />
      <span>{state ? "Aprobar Empresa" : "Rechazar Empresa"}</span>
    </button>
  );
}

export default Button;
