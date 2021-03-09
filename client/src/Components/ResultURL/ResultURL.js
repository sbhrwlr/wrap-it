/* eslint-disable react/prop-types */
import { React } from "react";
import { FillButton } from "tailwind-react-ui";
import "./ResultURL.css";

function ResultURL(props) {
  return (
    <div data-testid="ResultURL" className="result__root">
      <div className="result">
        <div className="result__link">
          {/* eslint-disable-next-line react/prop-types */}
          <p className="link">{props.wrapUrl}</p>
          <FillButton
            className="copy__btn"
            onClick={() => {
              navigator.clipboard.writeText(props.wrapUrl);
            }}
          >
            Copy
          </FillButton>
        </div>
      </div>
    </div>
  );
}

export default ResultURL;
