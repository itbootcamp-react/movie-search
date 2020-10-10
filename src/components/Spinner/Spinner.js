import React from "react";
import "./styled.css";

import SpinnerGif from "../../images/200.gif";

const Spinner = () => (
  <div>
    <img className="spinner" src={SpinnerGif} alt="Loading spinner" />
  </div>
);

export default Spinner;
