import Card from "components/Card";
import NavigationButton from "components/NavigationButton";
import CreateEditProductForm from "components/Forms/CreateEditProductForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const CreateEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);

  return (
    <div className="create-edit-page">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} top="1rem" left="1rem" onClick={handleGoBack} />
        <h1 className="color-tertiary text-center">{id ? "Edit Product" : "Create Product"}</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <CreateEditProductForm />
        </Card>
      </div>
    </div>
  );
};

export default CreateEditProduct;
