import React from "react";
import "./Form.css";
import logo1 from "../../logo1.svg";

function Form() {
  return (
    <div className="Form-container">
      <div className="Image-container">
        <img src={logo1} alt="logo" />
      </div>
      <form>
        <div className="Input-container">
          <label>
            Nombre de la empresa
            <input type="text" />
          </label>
          <label>
            Razón Social
            <input type="text" />
          </label>
          <label>
            Tipo de identificación
            <input type="text" />
          </label>
          <label>
            Identificación
            <input type="text" />
          </label>
          <label>
            # de empleados
            <input type="text" />
          </label>
        </div>
        <div className="Documents-container"></div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
