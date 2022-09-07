import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        Create your blog <Link to="/blog/create-blog">here.</Link>
      </p>
    </div>
  );
}

export default Blog;
