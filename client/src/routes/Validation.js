import { Fragment } from "react";
import "./Validation.css";
import Form from "../components/Form/Form";

export default function Validation() {
  return (
    <Fragment>
      <div className="Wrapper-form">
        <p className="Nav-page">Administración / Aprobación de Empresas</p>
        <Form />
      </div>
    </Fragment>
  );
}
