import React from "react";

const WeatherItem = ({ city, temperature, weather }) => {
  return (
    <div className="weather-display">
      <h2 className="city">{city}</h2>
      <p className="weather-info">Temperature: {temperature}</p>
      <p className="weather-info">Weather: {weather}</p>
    </div>
  );
};

export default WeatherItem;
