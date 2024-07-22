import React from "react";
import "../navbar-button/navbar-button.css";

export default function NavBarButton({ link, label }) {
  return (
    <a href={link} className="navbar-button">
      {label}
    </a>
  );
}
