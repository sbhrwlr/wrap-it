import { React } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

function Footer() {
  return (
    <div data-testid="footer" className="footer__root">
      <p data-testid="footer__cr">
        Made With <FontAwesomeIcon icon={faHeart} /> By Rahul
      </p>
    </div>
  );
}

export default Footer;
