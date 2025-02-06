import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ locations }) => {
  return (
    <div>
      {locations.length > 0 ? (
        locations.map((location, index) => (
          <WeatherItem
            key={index}
            city={location.city}
            temperature={location.temperature}
            weather={location.weather}
          />
        ))
      ) : (
        <p>No locations found</p>
      )}
    </div>
  );
};

export default WeatherList;
