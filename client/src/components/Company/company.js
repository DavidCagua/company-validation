import React, { useState, useEffect } from "react";
import "./Company.css";
import Documents from "../Documents/Documents";
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Button from "../Button/Button";

function Company({ name, title, nit, idType, employees, logo }) {
  const documents = 1;
  const mql = window.matchMedia("(min-width: 1024px)");
  const [Mobile, setMobile] = useState(!mql.matches);
  useEffect(() => {
    mql.onchange = (e) => {
      setMobile(!e.matches);
    };
  }, []);
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
        {documents > 0 ? (
          <Documents name={name} />
        ) : (
          <h4>No hay documentos cargados</h4>
        )}
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <Button documents={documents} mobile={Mobile} state={true} nit={nit} />
      <Button documents={documents} mobile={Mobile} state={false} nit={nit} />
    </div>
  );
}

export default Company;
