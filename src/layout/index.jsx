import BottomNavigation from "components/BottomNavigation";
import { Outlet, useLocation } from "react-router-dom";
import routes from "routes";
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
      <Outlet />
      {routesWithOutNavigation.includes(pathname) ? null : <BottomNavigation />}
    </div>
  );
};

export default Layout;
