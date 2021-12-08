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
        <span>Empresa 1 de 2 pendiente por aprobación</span>
        <img src={right} alt="" onClick={handleClikRight} />
      </p>
      {Companies ? <Company {...Companies[CompanyIndex]} /> : <p>hola</p>}
    </Fragment>
  );
}

export default Form;
