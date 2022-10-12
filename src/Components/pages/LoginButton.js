import React from "react";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";

export default function LoginButton() {
  return (
    <div>
      <Link to="/sign-in">
        <button className="signIn">Sign-In</button>
      </Link>
    </div>
  );
}
