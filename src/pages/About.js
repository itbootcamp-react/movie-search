import React from "react";
import Header from "../components/Header";

import "../App.css";

const About = (props) => {
  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie App Search" text2="About Page" />
        <h1 className="greetingMessage">
          Hello, this is my first React Project!
        </h1>
      </div>
    </div>
  );
};

export default About;
