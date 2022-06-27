import React from "react";
import "./ChallengeDetailsCard.css";

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
  return (
    <div className="details_card_container">
      <div className="card_name">{cardName}</div>
      <div className="card_value">{cardValue}</div>
    </div>
  );
};

export default ChallengeDetailsCard;
