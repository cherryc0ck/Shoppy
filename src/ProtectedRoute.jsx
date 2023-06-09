import { useAuthContext } from "context/AuthContext";
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuthContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
