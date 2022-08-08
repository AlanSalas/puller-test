import "./style.css";

const Chip = ({ children, style }) => {
  return (
    <div style={{ ...style }} className="chip">
      {children}
    </div>
  );
};

export default Chip;
