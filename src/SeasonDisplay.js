import "./SeasonDisplay.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const obj =
    season === "winter"
      ? {
          text: "Burr its chilly",
          icon: "massive snowflake icon",
        }
      : {
          text: "Let's hit the beach",
          icon: "massive sun icon",
        };
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${obj.icon}`} />
      <h1>{obj.text}</h1>
      <i className={`icon-right ${obj.icon}`} />
    </div>
  );
};

export default SeasonDisplay;
