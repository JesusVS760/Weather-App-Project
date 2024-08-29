import React, { useEffect, useState } from "react";
import "./Weather.css";
import Search from "../components/Search";
import ClearImage from "../images/clear.png";
import CloudsImage from "../images/clouds.png";
import rainImage from "../images/rain.png";
import snowImage from "../images/snow.png";
import drizzleImage from "../images/drizzle.png";
import mistImage from "../images/mist.png";
import windImage from "../images/wind.png";
import humidity from "../images/humidity.png";
const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [findWeatherImage, setFindWeatherImage] = useState("");
  const [weatherImage, setWeatherImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "86d6b425824db57f05a570be0012f6d3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=${apiKey}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCurrentWeather(result);
        const weatherCondition = result.weather?.[0]?.main;
        switch (weatherCondition) {
          case "Clear":
            setWeatherImage(ClearImage);
            break;
          case "Clouds":
            setWeatherImage(CloudsImage);
            break;
          case "Rain":
            setWeatherImage(rainImage);
            break;
          case "Snow":
            setWeatherImage(snowImage);
            break;
          case "Drizzle":
            setWeatherImage(drizzleImage);
            break;
          case "Wind":
            setWeatherImage(mistImage);
            break;
          default:
            setWeatherImage("NA");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, []);
  console.log("result", currentWeather);

  return (
    <div>
      {" "}
      {currentWeather && (
        <div className="weather-container">
          <div className="search-for-city">
            <Search />
          </div>
          <div className="weather-content">
            <img src={weatherImage} alt="image here" />
            <h1>{currentWeather.main?.temp}°C</h1>
            <h2>{currentWeather.name}</h2>
            <div className="weather-specifics">
              <div className="humidity">
                <div className="humidity-condition-image">
                  <img src={humidity} alt="humidity condition" />
                </div>
                <div className="humidity-info">
                  <h2>{currentWeather.main?.humidity}%</h2>
                  <h3>Humidity</h3>
                </div>
              </div>
              <div className="wind-speed">
                <div className="wind-condition-image">
                  <img src={windImage} alt="wind condition" />
                </div>
                <div className="wind-speed-info">
                  <h2>{currentWeather.wind?.speed} km/h</h2>
                  <h3>Wind Speed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
