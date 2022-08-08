import "./style.css";

const Button = ({ children, type, color, style, onClick }) => {
  return (
    <button type={type} onClick={onClick} style={{ ...style }} className={`btn ${color}`}>
      {children}
    </button>
  );
};

export default Button;
