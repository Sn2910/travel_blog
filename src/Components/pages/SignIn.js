import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn({ signin }) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const showPassword = () => {
    // const password = document.getElementById("new-password");
    // let openPassword = document.getElementsByClassName(".open-password");
    // let closePassword = document.getElementsByClassName(".close-password");
    // closePassword.style.display = "inline-block";
    // openPassword.style.display = "none";
    // if (password.type === "password") {
    //   password.type = "text";
    // } else {
    //   password.type = "password";
    // }
  };
  const hidePassword = () => {};

  const validate = () => {
    console.log(userName, password);
    signin(userName, password);
    navigate("/blog");
  };

  return (
    <div className="singInForm-Cont">
      <Container maxWidth="sm" className="signInWrap">
        <p>Kindly fill in all fields to sign in!</p>
        <form className="singInForm" action="/blog" method="post">
          <div>
            <h4>Username:</h4>
            <input
              type="text"
              id="username"
              // placeholder="Password"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          {/* <div>
            <h4>Email:</h4>
            <input type="email" />
          </div> */}
          <div className="passwords">
            <h4>Password:</h4>
            {/* <input type="password" />
             */}
            <i class="fa-solid fa-eye open-password" onclick={showPassword}></i>
            <i
              class="fa-solid fa-eye-slash close-password"
              onclick={hidePassword}
            ></i>
            <input
              type="password"
              id="new-password"
              // placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div className="signIn-Btn">
            <button onClick={validate}>Sign-In</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
