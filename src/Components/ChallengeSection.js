import React from "react";
import "./ChallengeSection.css";
import TestContainer from "./TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="challengeSection_container">
      <h1 data-aos="fade-down" className="challengeSection_header">
        Take a speed test now !
      </h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timerStarted={timerStarted}
        timeRemaining={timeRemaining}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
