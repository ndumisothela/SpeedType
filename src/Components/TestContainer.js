import React from "react";
import ChallengeContainer from "./ChallengeContainer";
import "./TestContainer.css";
import TryAgain from "./TryAgain";

const TestContainer = ({ words, characters, wpm }) => {
  const timeRemaining = 10;

  return (
    <div className="test_container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing_challenge_container">
          <ChallengeContainer words={words} characters={characters} wpm={wpm} />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
