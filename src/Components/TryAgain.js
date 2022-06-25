import React from "react";
import "./TryAgain.css";
import sloth from "./../Components/Assets/sloth.png";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <>
      <div className="try_again_container">
        <h1>Test Results</h1>
        <div className="result_container">
          <p>
            <b>Characters :</b>
            {characters}
          </p>
          <p>
            <b>Words :</b>
            {words}
          </p>
          <p>
            <b>Speed :</b>
            {wpm} wpm
          </p>
        </div>
        <div>
          <button className="end-buttons start-again-btn">Re-try</button>
          <button
            onClick={() => {
              window.open(
                "https://www.facebook.com/sharer/sharer.php?u=speedtype",
                "facebook-share-dialog",
                "width=800,height=600"
              );
            }}
            className="end-buttons share-btn"
          >
            Share
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.twitter.com/intent/tweet?text=",
                "Twitter",
                "width=800,height=600"
              );
            }}
            className="end-buttons tweet-btn"
          >
            Tweet
          </button>
        </div>
      </div>
      <div>
        <img className="sloth_image" src={sloth} alt="too_slow" />
      </div>
    </>
  );
};

export default TryAgain;
