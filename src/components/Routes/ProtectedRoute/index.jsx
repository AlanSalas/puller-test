import { Outlet, Navigate } from "react-router-dom";
import useStore from "store/useStore";

const ProtectedRoute = () => {
  const isAuth = useStore((state) => state?.user);

  return isAuth ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoute;
