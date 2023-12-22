import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

function PrivateRoute() {
  const location = useLocation<any>("");

  const [auth] = useState<boolean>(true);
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
