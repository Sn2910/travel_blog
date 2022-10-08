import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const showPassword = () => {};
  const hidePassword = () => {};
  const showConfirmPassword = () => {};
  const hideConfirmPassword = () => {};

  return (
    <div className="singUpForm-Cont">
      <Container maxWidth="sm" className="signUpWrap">
        <p>Kindly fill in all fields to create your new account!</p>
        <form className="singUpForm">
          <div className="userFullName">
            <div>
              <h4>First Name:</h4>
              <input type="text" />
            </div>
            <div>
              <h4>Last Name:</h4>
              <input type="text" />
            </div>
          </div>
          <div className="userName-Email">
            <div>
              <h4>Username:</h4>
              <input type="text" />
            </div>
            <div>
              <h4>Email:</h4>
              <input type="email" />
            </div>
          </div>
          <div className="password">
            <div className="signUp-passwords">
              <h4>Password:</h4>
              {/* <input type="password" /> */}
              <i
                class="fa-solid fa-eye open-password"
                onclick={showPassword}
              ></i>
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
            <div className="confirmPassword">
              <h4>Confirm Password:</h4>
              {/* <input type="password" /> */}
              <i
                class="fa-solid fa-eye open-password"
                onclick={showConfirmPassword}
              ></i>
              <i
                class="fa-solid fa-eye-slash close-password"
                onclick={hideConfirmPassword}
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
          </div>
          <div className="createAcc">
            <button>Create New Account</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
