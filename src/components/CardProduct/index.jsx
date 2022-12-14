import Card from "components/Card";
import Chip from "components/Chip";
import Author from "components/Author";
import noImage from "assets/no-image.jpg";
import { useNavigate } from "react-router-dom";
import "./style.css";

const chipStyle = {
  position: "absolute",
  top: "0",
  left: ".5rem",
  background: "#0e223d",
  color: "#fdfeff",
};

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <Card extraClass="card-product" onClick={handleViewDetail}>
      <div className="product-image-container">
        {product?.image?.secureUrl ? (
          <img className="product-image" src={product.image.secureUrl} alt={product.title} />
        ) : (
          <img className="product-image" src={noImage} alt={product.title} />
        )}
        {product.category && product.category !== "null" && (
          <Chip onClick={() => {}} style={chipStyle}>
            {product.category}
          </Chip>
        )}
      </div>
      <div className="product-details">
        {product?.user?.username ? (
          <Author image={product?.user?.image?.secureUrl} username={product?.user?.username} />
        ) : (
          <Author username="Anonymous" />
        )}
        <p style={{ margin: "1rem 0 .3rem 0" }} className="color-primary font-default bold">
          {product.title}
        </p>
        <p className="color-primary font-md text-right">${product.price.$numberDecimal} FRQTAL</p>
      </div>
    </Card>
  );
};

export default CardProduct;
