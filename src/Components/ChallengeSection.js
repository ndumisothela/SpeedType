import React from "react";
import "./ChallengeSection.css";
import TestContainer from "./TestContainer";

const ChallengeSection = () => {
  return (
    <div className="challengeSection_container">
      <h1 data-aos="fade-down" className="challengeSection_header">
        Take a speed test now !
      </h1>
      <TestContainer words={4} characters={14} wpm={20} />
    </div>
  );
};

export default ChallengeSection;
