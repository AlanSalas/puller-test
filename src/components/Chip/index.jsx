import "./style.css";

const Chip = ({ children, style, value, compareValue, onClick }) => {
  return (
    <div onClick={() => onClick(value)} style={{ ...style }} className={`chip ${value === compareValue && `active`}`}>
      {children}
    </div>
  );
};

export default Chip;
