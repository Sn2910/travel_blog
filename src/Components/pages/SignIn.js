import React from "react";
import "./UserSigning.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn({ signin }) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [cookies, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();

  let open = document.querySelector(".open-password");
  let hide = document.querySelector(".close-password");
  const showPassword = () => {
    const newPassword = document.getElementById("password");
    // setShow((prevState) => !prevState);
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

  const validate = () => {
    console.log(userName, password);
    signin(userName, password);
    if (!userName || !password) {
      alert("Please complete the fields...!😒");
    } else {
      navigate("/");
      // navigate("/signedup-users");
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      validate();
    }
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
              value={userName}
              name="userName"
              onKeyPress={handleKeypress}
              autoComplete="off"
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
            <input
              type="password"
              id="password"
              // placeholder="Password"
              value={password}
              name="password"
              onKeyPress={handleKeypress}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>
              <i
                class="fa-solid fa-eye open-password"
                onClick={showPassword}
              ></i>
              <i
                class="fa-solid fa-eye-slash close-password"
                onClick={hidePassword}
              ></i>
            </div>
          </div>
          <div className="signIn-Btn">
            <button onClick={validate}>Sign-In</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
