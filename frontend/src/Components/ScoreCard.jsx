
import React from "react";

function ScoreCard({ score }) {
  return (
    <div>
      <h3>Your Score</h3>
      <p>{score}</p>
    </div>
  );
}

export default ScoreCard;