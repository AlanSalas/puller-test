import "./style.css";

const Button = ({ children, type, style }) => {
  return (
    <button style={{ ...style }} className={`btn ${type}`}>
      {children}
    </button>
  );
};

export default Button;
