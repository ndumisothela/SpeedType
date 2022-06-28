import React from "react";
import ChallengeContainer from "./ChallengeContainer";
import "./TestContainer.css";
import TryAgain from "./TryAgain";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="test_container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing_challenge_container">
          <ChallengeContainer
            selectedParagraph={selectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
          />
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
