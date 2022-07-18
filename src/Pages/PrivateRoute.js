import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";
const PrivateRoute = () => {
  const { currentUser } = GetData();
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
