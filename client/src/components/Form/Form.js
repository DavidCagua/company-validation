import React from "react";
import "./Form.css";
import Documents from "../Documents/Documents";
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import logo1 from "../../logo1.svg";
import Button from "../Button/Button";

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
          <DocumentsButton />
        </div>
        <Documents />
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <Button Aproval={true} />
      <Button Aproval={false} />
    </div>
  );
}

export default Form;
