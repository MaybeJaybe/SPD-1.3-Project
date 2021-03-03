import React from "react";
import "../../App.css";
import CurrentWeatherMain from ".././CurrentWeatherMain.js";
import CurrentWeatherAdvanced from ".././CurrentWeatherAdvanced.js";

function Home() {
  return (
    <div className="Display">
      <CurrentWeatherMain />
      <CurrentWeatherAdvanced />
    </div>
  );
}

export default Home;
