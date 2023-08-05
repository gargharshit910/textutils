import React, { useState } from "react";
import propTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("upper case button is clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleOnChange = (event) => {
    console.log("handled on change");
    setText(event.target.value);
  };
  const handledownClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handlecleartext=()=>
  {
    let cleartext = "";
    setText(cleartext)
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary" onClick={handledownClick}>
          Convert To lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecleartext}>
          clear text
        </button>
        <div classname="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read that</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter heading here",
};
TextForm.propTypes = {
  heading: propTypes.string.isRequired,
};
