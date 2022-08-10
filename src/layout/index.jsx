import BottomNavigation from "components/BottomNavigation";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import routes from "routes";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Layout = () => {
  const location = useLocation();

  const getCurrentPathWithoutLastPart = () => {
    const pathRgx = /\//g;
    const childroutecount = ((location.pathname || "").match(pathRgx) || []).length;
    return childroutecount > 1 ? location.pathname.slice(0, location.pathname.lastIndexOf("/")) : location.pathname;
  };

  const routesWithOutNavigation = [
    routes.login,
    routes.signup,
    routes.forgotPassword,
    routes.resetPassword,
    routes.activation,
    routes.error404,
  ];

  return (
    <div className="layout">
      <ToastContainer theme="dark" position="top-center" hideProgressBar={false} closeOnClick />

      <Outlet />
      {routesWithOutNavigation.includes(getCurrentPathWithoutLastPart()) ? null : <BottomNavigation />}
    </div>
  );
};

export default Layout;
