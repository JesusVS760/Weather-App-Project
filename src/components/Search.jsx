import React, { useState } from "react";
import search from "../images/Search.png";
import "./Search.css";
const Search = ({ setCity }) => {
  const [isValidCity, setIsValidCity] = useState(true);
  const [enteredCity, setEnteredCity] = useState("");

  const handleEnteredCity = (city) => {
    setEnteredCity(city);
    if (city === "") {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
      setEnteredCity(city);
    }
  };
  const handleSearch = (seachForCity) => {
    setCity(seachForCity);
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
        <button onClick={() => handleSearch(enteredCity)}>
          <img src={search} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
