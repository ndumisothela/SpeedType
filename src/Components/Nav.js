import React from "react";
import logo from "./../Components/Assets/lightning.png";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <img className="flash_logo" src={logo} alt="flash_logo" />
        <p className="-flash_title_text">SpeedType</p>
      </div>
    </div>
  );
};

export default Nav;
