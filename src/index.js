import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
import TravelInfo from "./Components/TravelInfo/TravelInfo";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Footer />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/travel-blog/:id" element={<TravelInfo />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
