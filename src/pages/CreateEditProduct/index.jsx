import Card from "components/Card";
import NavigationButton from "components/NavigationButton";
import CreateProductForm from "components/Forms/CreateProductForm";
import EditProductForm from "components/Forms/EditProductForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const CreateEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);

  return (
    <div className="w-100 h-100">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-2">{id ? "Edit Product" : "Create Product"}</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          {location.pathname === "/product/create" ? <CreateProductForm /> : <EditProductForm id={id} />}
        </Card>
      </div>
    </div>
  );
};

export default CreateEditProduct;
