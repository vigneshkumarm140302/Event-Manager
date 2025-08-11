import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [access, setAccess] = useState(localStorage.getItem('access_token') || null)

  return access ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
