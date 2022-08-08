import Chip from "components/Chip";
import "./style.css";

const data = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const GroupCategories = ({ style }) => {
  return (
    <div style={{ ...style }} className="categories">
      <h3 className="color-tertiary">Categories</h3>
      <div className="categories-list">
        {data.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  );
};

export default GroupCategories;
