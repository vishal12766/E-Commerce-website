import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../Contexts/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff8f3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#541F03] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#541F03] font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
