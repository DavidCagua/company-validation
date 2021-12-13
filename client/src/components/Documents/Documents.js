import React from "react";
import "./Documents.css";
import pdfIcon from "../../pdf.svg";

function Documents({ name }) {
  return (
    <div className="Documents-container">
      <h3>Documentos Cargados</h3>
      <div className="List-container">
        <ul>
          <li>
            <span className="List-item">
              {name.toUpperCase()}
              <span className="icon">
                <img src={pdfIcon} alt="" />
                {name.toUpperCase()}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Documents;
