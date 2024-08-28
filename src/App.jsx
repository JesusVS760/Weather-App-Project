import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Started from "./pages/Started";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Started />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
