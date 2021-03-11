/* eslint-disable react/prop-types */
import { React } from "react";
import { FillButton } from "tailwind-react-ui";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
              toast.success("Copied !!!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            Copy
          </FillButton>

          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default ResultURL;
