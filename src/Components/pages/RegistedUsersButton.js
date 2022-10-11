import React from "react";
import { Link } from "react-router-dom";

export default function RegistedUsersButton() {
  return (
    <div>
      <Link to="registed-users">
        <button>Registed Users</button>
      </Link>
    </div>
  );
}
