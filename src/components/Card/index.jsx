import "./style.css";

const Card = ({ children, style, onClick, extraClass }) => {
  return (
    <div style={{ ...style }} className={`card ${extraClass}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
