import useStore from "store/useStore";
import "./style.css";

const Chip = ({ children, style, value, onClick }) => {
  const filterCategory = useStore((state) => state.filterCategory);

  return (
    <div onClick={() => onClick(value)} style={{ ...style }} className={`chip ${value === filterCategory && `active`}`}>
      {children}
    </div>
  );
};

export default Chip;
