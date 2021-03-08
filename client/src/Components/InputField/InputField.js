/* eslint-disable prettier/prettier */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useCallback, useState } from "react";
import { TextInput, Field, FillButton } from "tailwind-react-ui";
import "./InputField.css";
import wrapUrlService from "../services/wrapUrlService";
import axios from "axios";
import ResultURL from "../ResultURL/ResultURL";

function InputField(props) {
  const [wrapUrl, setWrapUrl] = useState("");
  const [response, setResponse] = useState([]);

  // Check if URL is valid or not

  const getWrapUrl = () => {
    axios.get("http://localhost:6202/").then((res) => {
      return res;
    });
  };

  const generateUrl = () => {
    axios
      .post("http://localhost:6202/", {
        full: props.longUrl,
      })
      .then((res) => {
        setWrapUrl(res.data.wrap);
      })
      .catch((err) => console.log(err));

    // setResponse(getWrapUrl());
  };
  console.log(wrapUrl);
  return (
    <div data-testid="InputField" className="input__root">
      <Field className="input_field">
        <TextInput
          className="input"
          name="fullUrl"
          placeholder="URL"
          onChange={(event) => {
            // eslint-disable-next-line react/prop-types
            props.onChange(event.target.value);
          }}
        />
      </Field>
      <FillButton className="input__btn" brand="primary" onClick={generateUrl}>
        Wrap!
      </FillButton>

      <ResultURL wrapUrl={wrapUrl} />
    </div>
  );
}

export default InputField;
