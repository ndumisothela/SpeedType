import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({ selectedParagraph }) => {
  return (
    <div className="typing_challenge">
      <p className="timer">00:01</p>
      <p className="timer_info">Start typing to start the test</p>

      <div className="textarea_container">
        <div className="textarea_left">
          <div className="text_paragraph">paraghaph</div>
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
