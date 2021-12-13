import React from "react";
import "./Documents.css";
import pdfIcon from "../../pdf.svg";

function Documents({ name, url }) {
  return (
    <div className="Documents-container">
      <h3>Documentos Cargados</h3>
      <div className="List-container">
        <ul>
          <li>
            <a
              href={url}
              target="_blank"
              className="List-item"
              rel="noopener noreferrer"
            >
              {name.toUpperCase()}
              <span className="icon">
                <img src={pdfIcon} alt="" />
                <p>{name.toUpperCase()}</p>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Documents;
