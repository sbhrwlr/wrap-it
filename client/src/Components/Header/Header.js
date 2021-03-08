import { React } from "react";
import Logo from "../Assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div data-testid="header" className="root">
      <div className="head__starter"></div>
      <div className="head">
        <div className="head__content">
          <img className="head__logo" src={Logo} alt="Logo Icon" />
          <h1 className="head__brand"> Wrap-it</h1>
        </div>
        <p className="head__description">
          Make your complex long URL short in one click
        </p>
      </div>
    </div>
  );
}

export default Header;
