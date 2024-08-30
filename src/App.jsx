import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Started from "./pages/Started";
import "./App.css";
import Weather from "./pages/Weather";
import Information from "./pages/Information";
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Started />}></Route>
          <Route path="/Weather" element={<Weather />}></Route>
          <Route path="/Information" element={<Information />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
