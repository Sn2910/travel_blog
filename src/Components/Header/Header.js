import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
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
            {/* <div>
                    <ul>
                        <li><Link to="{`/travel-blog/${destinations[0].sys.id}`}">Austria</Link></li>
                        <li><Link to="#">Romania</Link></li>
                        <li><Link to="#">Netherlands</Link></li>
                        <li><Link to="#">France</Link></li>
                        <li><Link to="#">Germany</Link></li>
                    </ul>
                </div> */}
          </Link>
        </nav>
      </header>
      <div>
        <h2>Tour Around The World</h2>
        <p>
          We're passionate about helping travelers to experience all the best in
          <br />
          Ghana. Find everything right here, from god culture, lovely people,
          <br />
          and all wonderful tourist attractions
        </p>
      </div>
    </div>
  );
}
