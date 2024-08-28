import React, { useEffect, useState } from "react";
import "./Weather.css";
import Search from "../components/Search";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const apiKey = "86d6b425824db57f05a570be0012f6d3";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = response.json();
        setCurrentWeather(result);
        console.log("result", result);
      } catch (error) {
        console.log(error);
      }
      fetchWeather();
    };
  }, [currentWeather]);

  return (
    <div className="weather-container">
      <div className="search-for-city">
        <Search />
      </div>
    </div>
  );
};

export default Weather;
