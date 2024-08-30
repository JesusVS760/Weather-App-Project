import React from "react";
import "./Started.css";
import Snow from "../images/snow.png";
import { useNavigate } from "react-router-dom";

const Started = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/Weather");
  };

  return (
    <div className="started-container">
      <div className="start-weather-image">
        <img src={Snow} alt="" />
      </div>
      <div className="start-weather-heading">
        <div className="weather-title">
          <h1>Weather</h1>
          <h2>ForeCasts</h2>
        </div>

        <div className="started-button-container">
          <button className="get-started-button" onClick={handleNextPage}>
            Get Started
          </button>
        </div>
        <p>Created by Jesus Vazquez</p>
      </div>
    </div>
  );
};

export default Started;
