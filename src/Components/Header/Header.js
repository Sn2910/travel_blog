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
          <Link to="">
            Destinations
            <div>
              {/* <ul>
                    {destinations.map((destination,index)=>{
                        return(
                            <li><Link to={`/travel-blog/${destination.sys.id}`}  key={index}>{destination.fields.country}</Link></li>
                        )
                    }
                    )}
                    </ul>  */}
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
}
export default Header;
