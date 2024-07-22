import React, { useState } from "react";
import "../navBar/navbar.css";
import NavBarButton from "../navbar-button/NavBarButton";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <NavBarButton label="Register" link="/register" />
        <NavBarButton label="Faq" link="/faq" />
        <NavBarButton label="About" link="/about" />
      </div>
    </div>
  );
}
