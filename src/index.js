import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TravelBlog from "./Components/TravelBlog";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/travel-blog/id" element={<TravelBlog />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
