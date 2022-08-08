import Chip from "components/Chip";
import "./style.css";

const data = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const GroupCategories = ({ style, detail, form }) => {
  return (
    <div style={{ ...style }} className="categories">
      <h3 className={detail ? "color-tertiary font-default" : "color-tertiary"}>
        {detail && "Category"}
        {form && "Select one category"}
        {!detail && !form && "Categories"}
      </h3>
      <div className="categories-list">
        {data.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  );
};

export default GroupCategories;
