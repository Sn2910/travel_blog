import React from "react";
import { Link } from "react-router-dom";

export default function SignUpButton() {
  return (
    <div>
      <Link to="/sign-up">
        <button className="signUp">Sign-Up</button>
      </Link>
    </div>
  );
}
