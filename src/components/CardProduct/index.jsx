import Card from "components/Card";
import Chip from "components/Chip";
import Author from "components/Author";
import { useNavigate } from "react-router-dom";
import "./style.css";

const cardStyle = {
  cursor: "pointer",
  background: "#fdfeff",
  display: "inline-block",
  marginBottom: "1rem",
  padding: "0.4rem",
  width: "100%",
};

const chipStyle = {
  position: "absolute",
  top: "0",
  left: ".5rem",
  background: "#0e223d",
  color: "#fdfeff",
};

const CardProduct = ({ id, image, title, category, price }) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
    console.log("click");
    navigate(`/product/${id}`);
  };

  return (
    <Card style={cardStyle} onClick={handleViewDetail}>
      <div className="product-image-container">
        <img className="product-image" src={image} alt={title} />
        <Chip style={chipStyle}>{category}</Chip>
      </div>
      <div className="product-details">
        <Author
          image="https://lh3.googleusercontent.com/a-/AFdZucq_XQARSQX9avY6VEegAj0nnc8coxY_2yeEOgWXAA=s83-c-mo"
          username="Sarface"
        />
        <p style={{ margin: "1rem 0 .3rem 0" }} className="color-primary font-default bold">
          {title}
        </p>
        <p className="color-primary font-md text-right">${price} FRQTAL</p>
      </div>
    </Card>
  );
};

export default CardProduct;
