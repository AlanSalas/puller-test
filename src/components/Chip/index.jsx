import "./style.css";

const Chip = ({ children, style, value, compareValue, onClick, id }) => {
  return (
    <div
      onClick={() => onClick(value, id)}
      style={{ ...style }}
      className={`chip ${value === compareValue && `active`}`}
    >
      {children}
    </div>
  );
};

export default Chip;
