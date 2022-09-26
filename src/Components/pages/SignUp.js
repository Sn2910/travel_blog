import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";

export default function SignUp() {
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
            <div>
              <h4>Password:</h4>
              <input type="password" />
            </div>
            <div>
              <h4>Confirm Password:</h4>
              <input type="password" />
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
