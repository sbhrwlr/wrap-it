/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import { React, useState } from "react";
import { TextInput, Field, FillButton } from "tailwind-react-ui";
import "./InputField.css";
import axios from "axios";
import ResultURL from "../ResultURL/ResultURL";

function InputField(props) {
  const [wrapUrl, setWrapUrl] = useState("Result Url");

  const generateUrl = () => {
    axios
      .post("https://wrapit.herokuapp.com/", {
        full: props.longUrl,
      })
      .then((res) => {
        setWrapUrl(res.data.wrap);
      })
      .catch((err) => console.log(err));
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
          else console.log("Not Valid");
        }}
      >
        Wrap!
      </FillButton>

      <ResultURL wrapUrl={wrapUrl} />
    </div>
  );
}

export default InputField;
