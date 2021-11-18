import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
import nav_menu from "../../nav_menu.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <p>
        <img className="Nav_logo" src={logo} alt="" />
        <span>Gente PreValente</span>
      </p>
      <img className="Nav_image" src={nav_menu} alt="" />
    </div>
  );
}

export default Navbar;
