import React from "react";
import "./TestContainer.css";
import TryAgain from "./TryAgain";

const TestContainer = ({ words, characters, wpm }) => {
  return (
    <div className="test_container">
      <div className="try-again-container">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
    </div>
  );
};

export default TestContainer;
