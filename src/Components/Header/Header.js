import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrap">
      <header>
        <h1>
          Travel<span>Blog</span>
        </h1>
        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">
            Destinations
            <div>
              <ul>
                <li>
                  <Link to="#">Austria</Link>
                </li>
                <li>
                  <Link to="#">Romania</Link>
                </li>
                <li>
                  <Link to="#">Netherlands</Link>
                </li>
                <li>
                  <Link to="#">France</Link>
                </li>
                <li>
                  <Link to="#">Germany</Link>
                </li>
              </ul>
            </div>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
