import { useAuthContext } from "context/AuthContext";
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children, requireAdmin }) => {
  console.log(requireAdmin);
  const { user } = useAuthContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    console.log("ddd");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
