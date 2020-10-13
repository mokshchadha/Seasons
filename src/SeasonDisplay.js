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
          icon: "snowflake",
        }
      : {
          text: "Let's hit the beach",
          icon: "sun",
        };
  return (
    <div>
      <i className={`${obj.icon} icon`} />
      <h1>{obj.text}</h1>
      <i className={`${obj.icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
