import React, { useState } from "react";
import "./Forecast.css";
import ClearImage from "../images/clear.png";
import CloudsImage from "../images/clouds.png";
import rainImage from "../images/rain.png";
import snowImage from "../images/snow.png";
import drizzleImage from "../images/drizzle.png";
import mistImage from "../images/mist.png";
import windImage from "../images/wind.png";

const Forecast = ({ weatherData }) => {
  const getWeatherImage = (condition) => {
    switch (condition) {
      case "Clear":
        return ClearImage;
        break;
      case "Clouds":
        return CloudsImage;
        break;
      case "Rain":
        return rainImage;
        break;
      case "Snow":
        return snowImage;
        break;
      case "Drizzle":
        return drizzleImage;
        break;
      case "Mist":
        return mistImage;
      default:
        return ClearImage;
    }
  };

  return (
    <div>
      <div className="forecast-heading">
        <h2>5-Days Forecasts</h2>
      </div>
      <div className="forecast-container">
        <div className="forecast-card">
          <h4>{weatherData.list[1].main.temp}°C</h4>
          <img
            src={getWeatherImage(weatherData.list[1].weather[0].main)}
            alt="weather condition"
          />
          <h4>Mon</h4>
        </div>
        <div className="forecast-card">
          <h4>{weatherData.list[2].main.temp}°C</h4>
          <img
            src={getWeatherImage(weatherData.list[2].weather[0].main)}
            alt="weather condition"
          />
          <h4>Tue</h4>
        </div>
        <div className="forecast-card">
          <h4>{weatherData.list[3].main.temp}°C</h4>
          <img
            src={getWeatherImage(weatherData.list[3].weather[0].main)}
            alt="weather condition"
          />
          <h4>Wed</h4>
        </div>
        <div className="forecast-card">
          <h4>{weatherData.list[4].main.temp}°C</h4>
          <img
            src={getWeatherImage(weatherData.list[4].weather[0].main)}
            alt="weather condition"
          />
          <h4>Thru</h4>
        </div>
        <div className="forecast-card">
          <h4>{weatherData.list[5].main.temp}°C</h4>
          <img
            src={getWeatherImage(weatherData.list[5].weather[0].main)}
            alt="weather condition"
          />
          <h4>Fri</h4>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
