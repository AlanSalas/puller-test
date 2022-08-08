import BottomNavigation from "components/BottomNavigation";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import routes from "routes";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Layout = () => {
  const { pathname } = useLocation();
  const routesWithOutNavigation = [
    routes.login,
    routes.signup,
    routes.forgotPassword,
    routes.resetPassword,
    routes.activation,
  ];

  return (
    <div className="layout">
      <ToastContainer theme="dark" position="top-center" hideProgressBar={false} closeOnClick />

      <Outlet />
      {routesWithOutNavigation.includes(pathname) ? null : <BottomNavigation />}
    </div>
  );
};

export default Layout;
