/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import { React, useState } from "react";
import { TextInput, Field, FillButton } from "tailwind-react-ui";
import "./InputField.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import ResultURL from "../ResultURL/ResultURL";

function InputField(props) {
  const [wrapUrl, setWrapUrl] = useState("Result Url");

  const generateUrl = async () => {
    await axios
      .get(props.longUrl)
      .then((out) => {
        if (out) {
          toast.success("🚀 Wraping up your URL", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          axios
            .post("https://wrapit.herokuapp.com/", {
              full: props.longUrl,
            })
            .then((res) => {
              setWrapUrl(res.data.wrap);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.error(err);
        setWrapUrl("Type a valid URL");
        toast.error("Not a valid URL Check if there is typo", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          limit: 1,
        });
      });
  };

  return (
    <div data-testid="InputField" className="input__root">
      <Field className="input_field">
        <TextInput
          className="input"
          name="fullUrl"
          placeholder="Wrap Your URL !!!"
          onChange={(event) => {
            // eslint-disable-next-line react/prop-types
            props.onChange(event.target.value);
          }}
        />
      </Field>

      <FillButton
        className="input__btn"
        brand="primary"
        onClick={() => {
          if (props.urlValid) generateUrl();
          else {
            toast.error("Not a valid URL", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }}
      >
        Wrap!
      </FillButton>

      <ResultURL wrapUrl={wrapUrl} />
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
  );
}

export default InputField;
