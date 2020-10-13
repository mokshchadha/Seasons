import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  return season === "winter" ? (
    <div>
      <h1>Burr its chilly</h1>
    </div>
  ) : (
    <div>
      <h1>Let's Hit the beach</h1>
    </div>
  );
};

export default SeasonDisplay;
