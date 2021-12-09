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
              RUT {name}
              <span className="icon">
                <img src={pdfIcon} alt="" />
                RUT {name}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Documents;
