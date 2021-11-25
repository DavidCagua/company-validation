import { Fragment } from "react";
import "./Validation.css";
import Form from "../components/Form/Form";
import right from "../right.svg";
import left from "../left.svg";

export default function Validation() {
  return (
    <Fragment>
      <div className="Wrapper-form">
        <p className="Nav-page">Administración / Aprobación de Empresas</p>
        <p className="Nav-company">
          <img src={left} alt="" />
          <span>Empresa 1 de 2 pendiente por aprobación</span>
          <img src={right} alt="" />
        </p>
        <Form />
      </div>
    </Fragment>
  );
}
