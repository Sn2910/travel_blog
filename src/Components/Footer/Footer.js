import React from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div>
      <Outlet />
      <div className="footerFlex">
        <div className="firstCont">
          <h2>Contact Us</h2>
          <div className="email">
            <p>Email:</p>
            <p>snekenntravelblog@gmail.com</p>
          </div>
          <div className="phone">
            <p>Tel:</p>
            <p>+49 000 123 4567</p>
          </div>
          <div className="icons">
            <FacebookOutlinedIcon
              sx={{
                fontSize: "1.5em",
                marginX: "5px",
                color: "#1c7ded",
                cursor: "pointer",
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: "1.5em",
                marginX: "5px",
                color: "#ac14a9",
                cursor: "pointer",
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: "1.5em",
                marginX: "5px",
                color: "#1c7ded",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="secondCont">
          <h2>Join our news letter</h2>
          <div className="input">
            <input
              type="email"
              placeholder="Enter your email here..."
              id="emailInput"
            />
            <input type="submit" value="Submit" id="submit" />
          </div>
        </div>
      </div>
      <div className="thirdCont">
        <div className="terms">
          <p>Terms of service</p>
          {"|"}
          <p>Privacy policy</p>
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright &copy; 2022 Travel<span>Blog</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
