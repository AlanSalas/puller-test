import Chip from "components/Chip";
import "./style.css";

const GroupCategories = ({ categories, style, detail, form, page, onClick, compareValue }) => {
  return (
    <div style={{ ...style }} className="categories">
      {!page && (
        <h3 className={detail ? "color-tertiary font-default" : "color-tertiary"}>
          {detail && "Category"}
          {!categories.length === 0 && form && "Select one category"}
          {!categories.length === 0 && !detail && !form && "Categories"}
        </h3>
      )}
      <div className="categories-list">
        <>
          {categories.length > 0 && (
            <>
              {categories.map((item, index) => (
                <Chip
                  key={index}
                  id={item._id || index}
                  value={item.name}
                  compareValue={compareValue}
                  onClick={onClick}
                >
                  {item.name}
                </Chip>
              ))}
            </>
          )}
        </>
        {categories.length === 0 && <p className="color-tertiary font-default bold">There are no categories yet</p>}
      </div>
    </div>
  );
};

export default GroupCategories;
