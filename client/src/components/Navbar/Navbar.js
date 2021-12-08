import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import nav_menu from "../../nav_menu.svg";
import Avatar from "../../navbarImages/Avatar.svg";
import Admin from "../../navbarImages/Admin.svg";
import Cv from "../../navbarImages/Cv.svg";
import Empleo from "../../navbarImages/Empleo.svg";
import Flecha from "../../navbarImages/Flecha.svg";
import Lupa from "../../navbarImages/Lupa.svg";

function Navbar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/`);
  }
  return (
    <div className="Navbar">
      <div className="Container">
        <p className="Mobile Logo" onClick={handleClick}>
          <img className="Nav_logo" src={logo} alt="" />
          <span>Gente PreValente</span>
        </p>
        <p className="Desktop">
          <img src={Lupa} alt="" />
          <span>Buscar...</span>
        </p>
      </div>
      <div className="Container">
        <span className="Desktop">
          <img src={Admin} alt="" />
          <span className="Admin">
            Administración
            <div className="Notifications">2</div>
          </span>
        </span>
        <p className="Desktop">
          <img src={Empleo} alt="" />
          <span>Empleo</span>
          <img src={Flecha} alt="" />
        </p>
        <p className="Desktop">
          <img src={Cv} alt="" />
          <span>Mi CV</span>
        </p>
        <p className="Desktop">
          <img src={Avatar} alt="" />
          <span>Daniel</span>
          <img src={Flecha} alt="" />
        </p>
        <img className="Nav_image" src={nav_menu} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
