import NavigationButton from "components/NavigationButton";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);
  const handleGoCreateCategory = () => navigate("/category/create", { state: "/categories" });

  return (
    <div className="categories-page">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} top="1rem" left="1rem" onClick={handleGoBack} />
        <h1 className="color-tertiary text-center">Categories</h1>
        <GroupCategories page />
        <div className="categories-actions">
          <Button
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            type="btn--success"
            onClick={handleGoCreateCategory}
          >
            Add <AiOutlinePlus />
          </Button>
          <Button style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} type="btn--error">
            Delete <AiOutlineDelete />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
