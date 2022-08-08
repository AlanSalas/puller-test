import NavigationButton from "components/NavigationButton";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);
  const handleGoCreateCategory = () => navigate("/category/create", { state: "/categories" });

  return (
    <div className="w-100 h-100">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-2">Categories</h1>
        <GroupCategories page />
        <div className="my-3 d-flex justify-space-around">
          <Button style={btnStyle} type="btn--success" onClick={handleGoCreateCategory}>
            Add <AiOutlinePlus />
          </Button>
          <Button style={btnStyle} type="btn--error">
            Delete <AiOutlineDelete />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
