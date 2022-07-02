import React from "react";
import TestLetter from "./TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  console.log("test info -", testInfo);
  return (
    <div className="typing_challenge">
      <p className="timer">
        00:{timeRemaining > 10 ? timeRemaining : `0${timeRemaining}`}
      </p>
      {/* when timeRemaining is less than 10 secends, it should still show double digits
      seconds*/}
      <p className="timer_info">
        {!timerStarted ? "Start typing to start the test" : "GO !"}
      </p>
      <div className="textarea_container">
        <div className="textarea_left">
          <div className="text_paragraph">
            {/*selectedParagraph*/}
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index} //since its an array we should use index because each letter has a different index
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>
        <div className="textarea_right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="start typing HERE!"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
