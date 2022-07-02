import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetterInfo }) => {
  const { status } = individualLetterInfo;

  {
    /*const statusClass = {
    correct: "test_letter_correct",
    incorrect: "test_letter_incorrect",
    notAppempted: "test_letter_not_attempted",
  }[status];*/
  }

  let statusClass;
  if (status === "correct") {
    statusClass = "test_letter_correct";
  } else if (status === "incorrect") {
    statusClass = "test_letter_incorrect";
  } else {
    statusClass = "test_letter_not_attempted";
  }

  return (
    <span className={`test_letter ${statusClass}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
