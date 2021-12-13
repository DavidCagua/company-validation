import React from "react";
import "./Toggle.css";

function Toggle({ isToggled }) {
  return (
    <div className="switch">
      <input type="checkbox" checked={isToggled} readOnly />
      <span className="slider"></span>
    </div>
  );
}

export default Toggle;
