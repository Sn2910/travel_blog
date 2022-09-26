import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";

export default function SignIn() {
  return (
    <div className="singInForm-Cont">
      <Container maxWidth="sm" className="signInWrap">
        <p>Kindly fill in all fields to sign in!</p>
        <form className="singInForm">
          <div>
            <h4>Username:</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Email:</h4>
            <input type="email" />
          </div>
          <div>
            <h4>Password:</h4>
            <input type="password" />
          </div>
          <div className="signIn-Btn">
            <button>Sign-In</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
