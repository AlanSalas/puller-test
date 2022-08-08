import NavigationButton from "components/NavigationButton";
import Author from "components/Author";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.css";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate("/");
  const handleGoToEdit = () => navigate(`/product/edit/${product.id}`, { state: `/product/${product.id}` });

  return (
    <div className="detail-page">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <div className="detail">
          <img className="detail-image" src={product.image} alt={product.name} />
          <p style={{ margin: "1rem 0" }} className="color-tertiary font-lg bold">
            {product.title}
          </p>
          <p style={{ margin: "1rem 0" }} className="color-tertiary font-default text-right">
            ${product.price} FRQTAL
          </p>
          <Author
            image="https://lh3.googleusercontent.com/a-/AFdZucq_XQARSQX9avY6VEegAj0nnc8coxY_2yeEOgWXAA=s83-c-mo"
            username="Sarface"
            detail
          />
          <p style={{ margin: "1rem 0" }} className="color-tertiary font-lg">
            {product.description}
          </p>
          <GroupCategories detail />
          <div className="detail-actions">
            <Button
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
              type="btn--info"
              onClick={handleGoToEdit}
            >
              Edit <AiOutlineEdit />
            </Button>
            <Button
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
              type="btn--error"
            >
              Delete <AiOutlineDelete />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
