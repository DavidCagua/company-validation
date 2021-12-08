import React from "react";
import "./Company.css";
import Documents from "../Documents/Documents";
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Button from "../Button/Button";

function Company({ name, title, nit, idType, employees, logo }) {
  return (
    <div className="Company-container">
      <div className="Image-container">
        <img src={logo} alt="logo" />
      </div>
      <form>
        <div className="Input-container">
          <label>
            Nombre de la empresa
            <input type="string" value={name} disabled />
          </label>
          <label>
            Razón Social
            <input type="string" value={title} disabled />
          </label>
          <label>
            Tipo de identificación
            <input type="text" value={idType} disabled />
          </label>
          <label>
            Identificación
            <input type="text" value={nit} disabled />
          </label>
          <label>
            # de empleados
            <input type="text" value={employees} disabled />
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

export default Company;
