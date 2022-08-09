import { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { willExpireToken } from "api/auth";
import useStore from "store/useStore";

const ProtectedRoute = () => {
  const token = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();

  const watchLocalStorage = () => {
    window.addEventListener("storage", () => {
      const localToken = localStorage.getItem("token");
      if (!localToken) {
        logOut();
        setToken(localToken);
      }
    });
  };

  const verifyLogin = () => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      if (willExpireToken(localToken)) {
        logOut();
      } else {
        localStorage.setItem("token", localToken);
        setToken(localToken);
      }
    } else {
      logOut();
    }
  };

  useEffect(() => {
    verifyLogin();
    watchLocalStorage();
  }, [token, navigate]);

  return token ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoute;
