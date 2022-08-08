import { Link } from "react-router-dom";
import "./style.css";

const CustomLink = ({ children, to, style }) => {
  return (
    <Link to={to} style={{ ...style }} className="custom-link">
      {children}
    </Link>
  );
};

export default CustomLink;
