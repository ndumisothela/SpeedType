import React from "react";
import "./ChallengeContainer.css";
import ChallengeDetailsCard from "./ChallengeDetailsCard";
import TypingChallenge from "./TypingChallenge";

const ChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="typing_challenge_container">
      {/*Datails Section*/}
      <div className="details_container">
        {/*Words typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/*characters typed */}
        <ChallengeDetailsCard cardName="characters" cardValue={characters} />

        {/*Words per minute typed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      <div className="typewriter_container">
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
        />
      </div>
    </div>
  );
};

export default ChallengeContainer;
