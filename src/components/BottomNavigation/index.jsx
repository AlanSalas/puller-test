import { BsPlus, BsFillPersonFill } from "react-icons/bs";
import { MdCategory, MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="bottom-navigation">
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate("/product/create")}
          role="button"
          className={`bottom-navigation-icon ${pathname === "/product/create" && `active`}`}
        >
          <BsPlus />
        </div>
        <p className="color-tertiary bold font-md">Add</p>
      </div>
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate("/categories")}
          role="button"
          className={`bottom-navigation-icon ${pathname === "/categories" && `active`}`}
        >
          <MdCategory />
        </div>
        <p className="color-tertiary bold font-md">Categories</p>
      </div>
      <div className="bottom-navigation-item">
        <div
          onClick={() => navigate("/profile")}
          role="button"
          className={`bottom-navigation-icon ${pathname === "/profile" && `active`}`}
        >
          <BsFillPersonFill />
        </div>
        <p className="color-tertiary bold font-md">Profile</p>
      </div>
      <div className="bottom-navigation-item">
        <div onClick={() => {}} role="button" className="bottom-navigation-icon">
          <MdLogout />
        </div>
        <p className="color-tertiary bold font-md">Logout</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
