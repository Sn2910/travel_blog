import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ signup, token }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  let open = document.querySelector(".open-password");
  let hide = document.querySelector(".close-password");
  let openConfirm = document.querySelector(".openConfirm-password");
  let hideConfirm = document.querySelector(".closeConfirm-password");

  const showPassword = () => {
    const newPassword = document.getElementById("password");
    open.style.display = "none";
    hide.style.display = "inline-block";
    if (newPassword.type === "password") {
      newPassword.type = "text";
    } else {
      password.type = "password";
    }
  };

  const hidePassword = () => {
    const newPassword = document.getElementById("password");
    // setShow((prevState) => !prevState);
    open.style.display = "inline-block";
    hide.style.display = "none";
    if (newPassword.type === "text") {
      newPassword.type = "password";
    } else {
      password.type = "text";
    }
  };

  const showConfirmPassword = () => {
    const newPassword = document.getElementById("confirmPassword");
    // setShow((prevState) => !prevState);
    openConfirm.style.display = "none";
    hideConfirm.style.display = "inline-block";
    if (newPassword.type === "password") {
      newPassword.type = "text";
    } else {
      password.type = "password";
    }
  };

  const hideConfirmPassword = () => {
    const newPassword = document.getElementById("confirmPassword");
    openConfirm.style.display = "inline-block";
    hideConfirm.style.display = "none";
    if (newPassword.type === "text") {
      newPassword.type = "password";
    } else {
      password.type = "text";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
      profileImage,
      userRole
    );
    signup(
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
      profileImage,
      userRole
    );
    if (signup) {
      navigate("/sign-up");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="singUpForm-Cont">
      <Container maxWidth="sm" className="signUpWrap">
        <p>Kindly fill in all fields to create your new account!</p>
        <form className="singUpForm" onSubmit={handleSubmit}>
          <div className="userFullName">
            <div>
              <h4>First Name:</h4>
              <input
                type="text"
                value={firstName}
                autoComplete="off"
                name="firstName"
                onKeyPress={handleKeypress}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <h4>Last Name:</h4>
              <input
                type="text"
                value={lastName}
                autoComplete="off"
                name="lastName"
                onKeyPress={handleKeypress}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="userName-Email">
            <div>
              <h4>Username:</h4>
              <input
                type="text"
                value={userName}
                autoComplete="off"
                name="userName"
                onKeyPress={handleKeypress}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div>
              <h4>Email:</h4>
              <input
                type="email"
                value={email}
                autoComplete="off"
                name="email"
                onKeyPress={handleKeypress}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="password">
            <div className="signUp-passwords">
              <h4>Password:</h4>
              {/* <input type="password" /> */}
              <i
                class="fa-solid fa-eye open-password"
                onClick={showPassword}
              ></i>
              <i
                class="fa-solid fa-eye-slash close-password"
                onClick={hidePassword}
              ></i>
              <input
                type={show ? "text" : "password"}
                id="password"
                // placeholder="Password"
                value={password}
                onKeyPress={handleKeypress}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="confirmPassword">
              <h4>Confirm Password:</h4>
              {/* <input type="password" /> */}
              <i
                class="fa-solid fa-eye openConfirm-password"
                onClick={showConfirmPassword}
              ></i>
              <i
                class="fa-solid fa-eye-slash closeConfirm-password"
                onClick={hideConfirmPassword}
              ></i>
              <input
                type="password"
                id="confirmPassword"
                // placeholder="Password"
                value={confirmPassword}
                onKeyPress={handleKeypress}
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="profile-role">
            <div className="profileImage">
              <h4>Profile Image Url:</h4>
              <input
                type="text"
                id="profileImage"
                value={profileImage}
                onKeyPress={handleKeypress}
                autoComplete="off"
                name="profileImage"
                onChange={(e) => setProfileImage(e.target.value)}
              ></input>
            </div>
            <div className="userRole">
              <h4>User Role:</h4>
              <input
                type="text"
                id="userRole"
                value={userRole}
                onKeyPress={handleKeypress}
                autoComplete="off"
                name="userRole"
                onChange={(e) => setUserRole(e.target.value)}
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
