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
import Forecast from "../components/Forecast";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherImage, setWeatherImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Los Angeles");

  const apiKey = "86d6b425824db57f05a570be0012f6d3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCurrentWeather(result);
        const weatherCondition = result.list[0].weather[0].main;
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
  }, [city]);
  console.log("result", currentWeather);

  const handleReceivedCity = (enteredCity) => {
    if (enteredCity == "") {
      return;
    } else setCity(enteredCity);
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/Information");
  };

  return (
    <div className="weather-wrap">
      {currentWeather && (
        <div className="weather-container">
          <div className="search-for-city">
            <Search setCity={handleReceivedCity} />
          </div>
          <div className="weather-content">
            <img src={weatherImage} alt="image here" />
            <h1>{currentWeather.list[0].main.temp}°C</h1>
            <h2>{currentWeather.city.name}</h2>
            <div className="weather-specifics">
              <div className="humidity">
                <div className="humidity-condition-image">
                  <img src={humidity} alt="humidity condition" />
                </div>
                <div className="humidity-info">
                  <h2>{currentWeather.list[0].main?.humidity}%</h2>
                  <h3>Humidity</h3>
                </div>
              </div>
              <div className="wind-speed">
                <div className="wind-condition-image">
                  <img src={windImage} alt="wind condition" />
                </div>
                <div className="wind-speed-info">
                  <h2>{currentWeather.list[0].wind?.speed} km/h</h2>
                  <h3>Wind Speed</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-forecast">
            <Forecast
              weatherData={currentWeather}
              weatherCondition={weatherImage}
            />
          </div>
          <div className="more-information">
            <button onClick={handleNextPage}>PM Accelerator Description</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
