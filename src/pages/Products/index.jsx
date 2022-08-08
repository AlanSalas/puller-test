import Input from "components/Input";
import GroupCategories from "components/GroupCategories";
import ListProduct from "components/ListProduct";
import { AiOutlineSearch } from "react-icons/ai";

import "./style.css";

const Products = () => {
  return (
    <div className="products-page">
      <div className="container">
        <h1 className="color-tertiary text-center">Products App</h1>
        <Input icon={AiOutlineSearch} type="text" placeholder="Search" />
        <GroupCategories />
        <ListProduct />
      </div>
    </div>
  );
};

export default Products;
