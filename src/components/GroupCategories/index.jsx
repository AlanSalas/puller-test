import Chip from "components/Chip";
import "./style.css";

const GroupCategories = ({ categories, style, detail, form, page, onClick }) => {
  return (
    <div style={{ ...style }} className="categories">
      {!page && (
        <h3 className={detail ? "color-tertiary font-default" : "color-tertiary"}>
          {detail && "Category"}
          {form && "Select one category"}
          {!detail && !form && "Categories"}
        </h3>
      )}
      <div className="categories-list">
        {categories.map((item) => (
          <Chip key={item._id} value={item.name} onClick={onClick}>
            {item.name}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default GroupCategories;
