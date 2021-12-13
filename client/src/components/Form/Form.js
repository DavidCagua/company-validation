import React, { Fragment, useEffect, useState } from "react";
import Company from "../Company/company";
import right from "../../right.svg";
import left from "../../left.svg";

function Form() {
  const [Companies, setCompanies] = useState();
  const [CompanyIndex, setCompanyIndex] = useState(0);
  useEffect(() => {
    let mounted = true;
    fetch("http://localhost:3001/company")
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setCompanies(data);
        }
      });
    return () => (mounted = false);
  }, []);
  function handleClikLeft() {
    if (CompanyIndex > 0) {
      return setCompanyIndex(CompanyIndex - 1);
    }
  }
  function handleClikRight() {
    if (CompanyIndex + 1 < Companies.length) {
      return setCompanyIndex(CompanyIndex + 1);
    }
  }
  return (
    <Fragment>
      <p className="Nav-company">
        <img src={left} alt="" onClick={handleClikLeft} />
        <span>
          Empresa {Companies ? CompanyIndex + 1 : 0} de{" "}
          {Companies ? Companies.length : 0} pendiente por aprobación
        </span>
        <img src={right} alt="" onClick={handleClikRight} />
      </p>
      {Companies ? (
        Companies.map((comp) => {
          comp.visible = false;
          if (Companies.indexOf(comp) === CompanyIndex) {
            comp.visible = true;
          } else {
            comp.visible = false;
          }
          return <Company key={comp.name} {...comp} />;
        })
      ) : (
        <p>Cargando...</p>
      )}
    </Fragment>
  );
}

export default Form;
