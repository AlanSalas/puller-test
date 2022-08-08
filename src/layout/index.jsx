import BottomNavigation from "components/BottomNavigation";
import { Outlet, useLocation } from "react-router-dom";
import "./style.css";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default Layout;
