import { BsPlus, BsFillPersonFill } from "react-icons/bs";
import { MdCategory, MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import useStore from "store/useStore";
import routes from "routes";
import "./style.css";

const BottomNavigation = () => {
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="bottom-navigation">
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate(routes.productCreate)}
          role="button"
          className={`bottom-navigation-icon ${pathname === routes.productCreate && `active-route`}`}
        >
          <BsPlus />
        </div>
        <p className="color-primary bold font-md">Add</p>
      </div>
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate(routes.categories)}
          role="button"
          className={`bottom-navigation-icon ${pathname === routes.categories && `active-route`}`}
        >
          <MdCategory />
        </div>
        <p className="color-primary bold font-md">Categories</p>
      </div>
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate(routes.profile)}
          role="button"
          className={`bottom-navigation-icon ${pathname === routes.profile && `active-route`}`}
        >
          <BsFillPersonFill />
        </div>
        <p className="color-primary bold font-md">Profile</p>
      </div>
      <div className="bottom-navigation-item">
        <div onClick={handleLogout} role="button" className="bottom-navigation-icon">
          <MdLogout />
        </div>
        <p className="color-primary bold font-md">Logout</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
