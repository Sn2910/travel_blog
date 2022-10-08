import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ signup }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const showPassword = () => {};
  const hidePassword = () => {};
  const showConfirmPassword = () => {};
  const hideConfirmPassword = () => {};

  const createAccount = () => {
    console.log(
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword
    );
    signup(firstName, lastName, userName, email, password, confirmPassword);
    navigate("/");
  };

  return (
    <div className="singUpForm-Cont">
      <Container maxWidth="sm" className="signUpWrap">
        <p>Kindly fill in all fields to create your new account!</p>
        <form className="singUpForm" action="/" method="post">
          <div className="userFullName">
            <div>
              <h4>First Name:</h4>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <h4>Last Name:</h4>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="userName-Email">
            <div>
              <h4>Username:</h4>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <h4>Email:</h4>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="createAcc">
            <button onClick={createAccount}>Create New Account</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
