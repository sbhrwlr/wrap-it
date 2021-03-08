/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./Components/Header/Header";
import InputField from "./Components/InputField/InputField";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import wrapUrlService from "./Components/services/wrapUrlService";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [urlValid, setUrlValid] = useState(false);
  const [resutlUrl, setResultUrl] = useState("");
  const [wrapUrlSvc, setWrapUrlService] = useState(new wrapUrlService());

  console.log(urlValid);
  const urlValidator = (value) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    setUrlValid(!!pattern.test(value));
  };

  const generateUrl = () => {};

  return (
    <div className="App">
      <Header />

      <InputField
        urlValid={urlValid}
        longUrl={longUrl}
        onChange={(value) => {
          setLongUrl(value);
          urlValidator(value);
        }}
        onClick={generateUrl}
      />

      <Footer />
    </div>
  );
}

export default App;
