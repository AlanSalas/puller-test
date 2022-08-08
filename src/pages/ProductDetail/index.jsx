import NavigationButton from "components/NavigationButton";
import Author from "components/Author";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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

const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate("/");
  const handleGoToEdit = () => navigate(`/product/edit/${product.id}`, { state: `/product/${product.id}` });

  return (
    <div className="w-100 h-100">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <div className="w-100 mt-2">
          <img style={{ height: "27.5rem" }} className="w-100 rounded" src={product.image} alt={product.name} />
          <p className="color-tertiary font-lg bold my-1">{product.title}</p>
          <p className="color-tertiary font-default text-right my-1">${product.price} FRQTAL</p>
          <Author
            image="https://lh3.googleusercontent.com/a-/AFdZucq_XQARSQX9avY6VEegAj0nnc8coxY_2yeEOgWXAA=s83-c-mo"
            username="Sarface"
            detail
          />
          <p className="color-tertiary font-lg my-1">{product.description}</p>
          <GroupCategories detail />
          <div className="my-3 d-flex justify-space-around">
            <Button style={btnStyle} type="btn--info" onClick={handleGoToEdit}>
              Edit <AiOutlineEdit />
            </Button>
            <Button style={btnStyle} type="btn--error">
              Delete <AiOutlineDelete />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
