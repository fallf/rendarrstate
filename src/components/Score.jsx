import React from "react";

function Score({ score }) {
  return (
    <p>
      {score.date}: {score.score}
    </p>
  );
}

export default Score;
