import React, { useState } from "react";
import WeatherList from "./components/WeatherList";
import SearchBar from "./components/SearchBar";
import locationsData from "./data/locations.json";
import "./App.css";
import "./WeatherDisplay.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locationsData.filter((location) =>
    location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title">Weathers around the World</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <WeatherList locations={filteredLocations} />
    </div>
  );
};

export default App;
