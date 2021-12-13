import React, { useState, useEffect } from "react";
import "./Company.css";
import Documents from "../Documents/Documents";
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Button from "../Button/Button";
import Toggle from "../Toggle/Toggle";

function Company({
  name,
  title,
  nit,
  idType,
  employees,
  logo,
  documents,
  active,
  visible,
}) {
  const documentsCounter = documents.length;
  const mql = window.matchMedia("(min-width: 1024px)");
  const [Mobile, setMobile] = useState(!mql.matches);
  const [isToggled, setIsToggled] = useState(active);

  useEffect(() => {
    mql.onchange = (e) => {
      setMobile(!e.matches);
    };
  }, [mql]);

  async function handleClick(state) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: state,
        nit: nit,
      }),
    };
    fetch("http://localhost:3001/company", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsToggled(data.active);
      });
  }

  return (
    <div className={visible ? "Company-container" : "Company-container-hidden"}>
      <Toggle isToggled={isToggled} />
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
        {documentsCounter > 0 ? (
          documents.map((document) => {
            return <Documents key={document.name} name={document.name} />;
          })
        ) : (
          <h4>No hay documentos cargados</h4>
        )}
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <Button
        documents={documentsCounter}
        mobile={Mobile}
        state={true}
        nit={nit}
        onClick={handleClick}
      />
      <Button
        documents={documentsCounter}
        mobile={Mobile}
        state={false}
        nit={nit}
        onClick={handleClick}
      />
    </div>
  );
}

export default Company;
