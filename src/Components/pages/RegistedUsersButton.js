import React from "react";
import { Link } from "react-router-dom";

export default function RegistedUsersButton() {
  return (
    <div>
      <Link to="registed-users">
        <button>Registered Users</button>
      </Link>
    </div>
  );
}
