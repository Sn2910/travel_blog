import React from "react";
import { Link } from "react-router-dom";

export default function DeleteBlog() {
  return (
    <div className="deteleBlog">
      <Link to="#">
        <button className="signUp">Delete Blog</button>
      </Link>
    </div>
  );
}
