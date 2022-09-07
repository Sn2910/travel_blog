import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import tourImage from "../../Images/tour.png";

function Header({ destinations }) {
  console.log(destinations);
  return (
    <div>
      <div className="logoWrap">
        <img src={tourImage} alt="" width="70px" height="70px" />
        <h1>
          Travel<span>Blog</span>
        </h1>
      </div>
      <header>
        <nav className="navLinks">
          <NavLink to="#" className="dest">
            Destinations
            <ul>
              {destinations.map((destination, index) => {
                return (
                  <li key={index}>
                    <Link to={`/travel-blog/${destination.sys.id}`} key={index}>
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
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="blog" className="blog">
            BLOG
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
export default Header;
