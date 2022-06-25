import "./Landing.css";
import React from "react";
import hero from "./../Components/Assets/hero.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing_container">
      <div data-aos="fade-right" className="landing_left">
        <h1 className="landing_header">Can you type...</h1>
        <div className="typewriter_container">
          <Typewriter
            options={{
              strings: ["Fast ?", "Correct ?", "Quick ?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing_right">
        <img className="flash_image" src={hero} alt="hero_logo" />
      </div>
    </div>
  );
};

export default Landing;
