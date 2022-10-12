import React from "react";
import "./Header.css";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import tourImage from "../../Images/tour.png";
import { Logout } from "@mui/icons-material";
import LogOut from "../pages/LogOut";
import LoginButton from "../pages/LoginButton";
import SignUpButton from "../pages/SignUpButton";
import RegistedUsersButton from "../pages/RegistedUsersButton";


function Header({ destinations, token }) {
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
          <Link to="#" className="dest">
            Destinations
            <ul>
              {destinations.map((destination, index) => {
                return (
                  <li key={index}>
                    <Link to={`/travel-blog/${destination.id}`} key={index}>
                      {destination.country}
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
          </Link>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/managecountry" className="addcountrydetails">
            Manage Country
          </NavLink>
          <NavLink to="/blog" className="blog">
            BLOG
          </NavLink>
        </nav>
        <div className="userSigning">
          <p>{!token && <SignUpButton />}</p>
          {!token && <div className="signLine"></div>}
          <p>{!token && <LoginButton />}</p>
        </div>
        <div className="userLogOut">{token && <LogOut />}</div>
        <div className="regUsers">{token && <RegistedUsersButton />}</div>
      </header>
    </div>
  );
}
export default Header;
