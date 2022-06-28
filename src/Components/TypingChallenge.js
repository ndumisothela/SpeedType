import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({
  selectedParagraph,
  timeRemaining,
  timerStarted,
}) => {
  return (
    <div className="typing_challenge">
      <p className="timer">
        00:{timeRemaining > 10 ? timeRemaining : `0${timeRemaining}`}
      </p>
      {/* when timeRemaining is less than 10, it should still show double digits
      seconds*/}
      <p className="timer_info">
        {!timerStarted ? "Start typing to start the test" : "GO !"}
      </p>
      <div className="textarea_container">
        <div className="textarea_left">
          <div className="text_paragraph">{selectedParagraph}</div>
        </div>
        <div className="textarea_right">
          <textarea
            className="textarea"
            placeholder="start typing HERE!"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
