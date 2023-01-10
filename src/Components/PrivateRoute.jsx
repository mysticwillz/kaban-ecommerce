import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { OverlayLoader } from "../reuseables/Loaders";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <OverlayLoader />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}
