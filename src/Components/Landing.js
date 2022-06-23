import "./Landing.css";
import React from "react";
import hero from "./../Components/Assets/hero.png";

const Landing = () => {
  return (
    <div className="landing_container  ">
      <div className="landing_left">
        <h1 className="landing_header">Can you type...</h1>
        <div className="typewriter_container">
          <h1>Fast?</h1>
          <h1>Correct?</h1>
          <h1>Quick?</h1>
        </div>
      </div>
      <div className="landing_right">
        <img className="flash_photo" src={hero} alt="hero_logo" />
      </div>
    </div>
  );
};

export default Landing;
