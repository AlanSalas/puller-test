import "./style.css";

const Button = ({ children, type, style, onClick }) => {
  return (
    <button onClick={onClick} style={{ ...style }} className={`btn ${type}`}>
      {children}
    </button>
  );
};

export default Button;
