import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ destinations }) {
  console.log(destinations);
  return (
    <div>
      <header>
        <h1>
          Travel<span>Blog</span>
        </h1>
        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="" className="dest">
            Destinations
            <div>
              <ul>
                {destinations.map((destination, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/travel-blog/${destination.sys.id}`}
                        key={index}
                      >
                        {destination.fields.country}
                      </Link>
                    </li>
                  );
                })}
                {/* li><Link to="/travel-blog/6Sr73RpHDWl8Bjc6CTXqhK">Austria</Link></li>
                        <li><Link to="#">Romania</Link></li>
                        <li><Link to="#">Netherlands</Link></li>
                        <li><Link to="#">France</Link></li>
                        <li><Link to="#">Germany</Link></li> */}
              </ul>
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
}
export default Header;
