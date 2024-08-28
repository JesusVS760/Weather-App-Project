import React, { useState } from "react";
import search from "../images/Search.png";
import "./Search.css";
const Search = () => {
  const [isValidCity, setIsValidCity] = useState(true);
  const [enteredCity, setEnteredCity] = useState("");

  const handleEnteredCity = (city) => {
    setEnteredCity(city);
    if (city === "") {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }
  };
  return (
    <div className="search-container">
      <div className="searh-contents">
        <input
          onChange={(e) => handleEnteredCity(e.target.value)}
          className={isValidCity ? "input-border-clear" : "input-border-red"}
          type="text"
          placeholder="Enter city name"
        />
        <button>
          <img src={search} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
