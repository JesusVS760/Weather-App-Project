import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Started from "./pages/Started";
import "./App.css";
import Weather from "./pages/Weather";
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Started />}></Route>
          <Route path="/Weather" element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
