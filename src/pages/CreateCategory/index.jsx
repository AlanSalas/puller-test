import Card from "components/Card";
import NavigationButton from "components/NavigationButton";
import CreateCategoryForm from "components/Forms/CreateCategoryForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);

  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-2">Create category</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <CreateCategoryForm />
        </Card>
      </div>
    </div>
  );
};

export default CreateCategory;
