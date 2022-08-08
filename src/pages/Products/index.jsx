import Input from "components/Input";
import GroupCategories from "components/GroupCategories";
import ListProduct from "components/ListProduct";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
  return (
    <div className="h-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Products App</h1>
        <Input icon={AiOutlineSearch} type="text" placeholder="Search" />
        <GroupCategories />
        <ListProduct />
      </div>
    </div>
  );
};

export default Products;
