import React from "react";
import "./Button.css";
import validate from "../../validate.svg";
import reject from "../../reject.svg";

function Button({ state, nit }) {
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
    <button className="Button" onClick={handleClick}>
      <img src={state ? validate : reject} alt="validate" />
      <span>{state ? "Aprobar Empresa" : "Rechazar Empresa"}</span>
    </button>
  );
}

export default Button;
