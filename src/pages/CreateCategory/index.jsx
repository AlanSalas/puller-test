import Card from "components/Card";
import NavigationButton from "components/NavigationButton";
import CreateCategoryForm from "components/Forms/CreateCategoryForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const CreateCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);

  return (
    <div className="create-category-page">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} top="1rem" left="1rem" onClick={handleGoBack} />
        <h1 className="color-tertiary text-center">Create category</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <CreateCategoryForm />
        </Card>
      </div>
    </div>
  );
};

export default CreateCategory;
