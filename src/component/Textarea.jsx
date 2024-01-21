import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function TextForm(props) {
  const handleUpFSize = (value) => {
    setFontSize(value + "px");
  };

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleitalic = () => {
    setisitalic(!isitalic);
  };

  const handleToggleunderline = () => {
    setisunderline(!isunderline);
  };

  const handleToggleleft = () => {
    setisleft(!isleft);
  };

  const handleTogglecenter = () => {
    setiscenter(!iscenter);
  };

  const handleTogglesymbol = () => {
    setissymbol(!issymbol);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToClear = () => {
    let newText = "";
    setText(newText);
  };

  const listenText = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const convertToCamelCaseWithSpaces = () => {
    let words = text.split(" ");
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let newText = words.join(" ");

    setText(newText);
  };

  const validemail = () => {
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    let newText = isValidEmail(text);
    if (newText) {
      let newText = "yes is a valid email";
      setText(newText);
    } else {
      let newText = "Sorry , Wrong email";
      setText(newText);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isitalic, setisitalic] = useState(false);
  const [isunderline, setisunderline] = useState(false);
  const [isleft, setisleft] = useState(false);
  const [iscenter, setiscenter] = useState(false);
  const [issymbol, setissymbol] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="row mb-2 ">
          <div className="col-lg-2 col-0"></div>
          <div className="col-lg-8 col-12 d-flex justify-content-evenly align-items-center">
            <div className="col-3">
              <input
                type="number"
                value={parseInt(fontSize)}
                min={0}
                className="border-0 shadow-0 outline-none text-center bg-success w-75"
                onChange={(e) => handleUpFSize(e.target.value)}
              />
            </div>

            <div className="col-1 d-flex align-items-center justify-content-center ">
              <i
                className={`fi fi-sr-bold ${isBold ? "text-success" : ""}`}
                onClick={handleToggleBold}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                class={`fi fi-sr-italic   ${isitalic ? "text-success" : ""}`}
                onClick={handleToggleitalic}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                class={`fi fi-sr-underline   ${
                  isunderline ? "text-success" : ""
                }`}
                onClick={handleToggleunderline}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                class={`fi fi-sr-align-left   ${isleft ? "text-success" : ""}`}
                onClick={handleToggleleft}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                class={`fi fi-sr-align-center   ${
                  iscenter ? "text-success" : ""
                }`}
                onClick={handleTogglecenter}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <i
                class={`fi fi-sr-symbol   ${issymbol ? "text-success" : ""}`}
                onClick={handleTogglesymbol}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="col-1  d-flex align-items-center justify-content-center ">
              <input type="color" value={selectedColor} onChange={handleColorChange} />
            </div>
          </div>
          <div className="col-lg-2 col-0"></div>
        </div>
        <div className="mb-3" style={{ position: "relative" }}>
          <textarea
            className={`form-control  bg-${
              copied ? "success" : "dark"
            } text-light ${isBold ? "fw-bold" : ""} ${
              isitalic ? "fst-italic" : ""
            } ${isunderline ? "text-decoration-underline" : ""}
            ${isleft ? "text-start" : ""}  ${iscenter ? "text-center" : ""}   ${
              issymbol ? "text-end" : "" }`}
            value={text}
            onChange={handleOnChange}
            style= {{ fontSize: fontSize , color : selectedColor} }
            id="myBox"
            rows="8"
          ></textarea>
          <MDBIcon
            fas
            icon={copied ? "check" : "paste"}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
              padding: "5px",
              color: copied ? "green" : "white",
            }}
            onClick={handleCopyToClipboard}
          />
          {copied && (
            <div style={{ color: "green", marginTop: "5px" }}>Copied!</div>
          )}

          <div>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
              <button
                className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
                onClick={handleUpClick}
              >
                Convert to Uppercase
              </button>
              <button
                className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
                onClick={handleLoClick}
              >
                Convert to Lowercase
              </button>
              <button
                className="btn btn-success  mx-1 my-1 text-capitalize btn-sm "
                onClick={convertToCamelCaseWithSpaces}
              >
                Camel Casing
              </button>
              <button
                className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
                onClick={listenText}
              >
                Listen
              </button>
              <button
                className="btn btn-success mx-1 my-1 text-capitalize btn-sm "
                onClick={validemail}
              >
                Email Testing
              </button>
              <button className="btn btn-danger mx-1" onClick={handleToClear}>
                Clear
              </button>
            </div>
          </div>
          <div className="container my-3 text-light">
            <h2>Your text summary</h2>
            <p>
              {
                text.split(" ").filter((Element) => {
                  return Element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((Element) => {
                  return Element.length !== 0;
                }).length}{" "}
              Minutes read
            </p>
            <h2>Preview</h2>
            <p>
              {text.length > 0
                ? text
                : "nothing to preview . Please write Something"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
