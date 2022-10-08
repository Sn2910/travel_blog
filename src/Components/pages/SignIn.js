import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const showPassword = () => {
    const password = document.getElementById("new-password");
    let openPassword = document.getElementsByClassName(".open-password");
    let closePassword = document.getElementsByClassName(".close-password");
    closePassword.style.display = "inline-block";
    openPassword.style.display = "none";
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  const hidePassword = () => {};

  return (
    <div className="singInForm-Cont">
      <Container maxWidth="sm" className="signInWrap">
        <p>Kindly fill in all fields to sign in!</p>
        <form className="singInForm">
          <div>
            <h4>Username:</h4>
            <input type="text" />
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
            <button>Sign-In</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
