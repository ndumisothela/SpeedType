import React from "react";
import "./ChallengeContainer.css";
import ChallengeDetailsCard from "./ChallengeDetailsCard";

const ChallengeContainer = ({ words, characters, wpm }) => {
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

        <div className="typewriter_container">
          <p>this is the real typing challenge</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeContainer;
