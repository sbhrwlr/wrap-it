/* eslint-disable react/prop-types */
import { React } from "react";
import QR from "../Assets/qr.svg";
import { FillButton } from "tailwind-react-ui";
import "./ResultURL.css";

function ResultURL(props) {
  return (
    <div data-testid="ResultURL" className="result__root">
      <div className="result">
        <div className="result__qr">
          <img src={QR} alt="Logo Icon" />
        </div>
        <div className="result__link">
          <p className="link">{props.wrapUrl}</p>
          <FillButton className="copy__btn">Copy</FillButton>
        </div>
      </div>
    </div>
  );
}

export default ResultURL;
