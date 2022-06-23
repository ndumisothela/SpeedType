import React from "react";
import "./Nav.css";
import lightning from "./../Components/Assets/lightning.png";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <img className="flash_logo" src={lightning} alt="flash_logo" />
        <p className="flash_title_text">SpeedType</p>
      </div>
      <div className="nav_right">
        <a
          className="nav_portfolio_link"
          href="https://ndumiso-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          My Portfolio
        </a>
      </div>
    </div>
  );
};

export default Nav;
