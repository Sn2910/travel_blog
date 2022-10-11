import React from "react";
import "./UserSigning.css";
import { Link, useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();

  const logout = () => {};
  return (
    <div>
      <Link to="/">
        <button className="logOut" onClick={logout}>
          Log Out
        </button>
      </Link>
    </div>
  );
}
