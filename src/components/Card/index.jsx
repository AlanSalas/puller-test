import "./style.css";

const Card = ({ children, style, onClick }) => {
  return (
    <div style={{ ...style }} className="card" onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
