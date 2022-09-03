import React from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <Outlet />
      <div className="footer">
        Copyright &copy;2022 Travel<span>Blog</span>
      </div>
    </div>
  );
}
