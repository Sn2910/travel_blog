import React from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, token }) {
  return token ? <>{children}</> : <Navigate to="/sign-in" />;
}
