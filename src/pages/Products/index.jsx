import { useEffect } from "react";
import Input from "components/Input";
import GroupCategories from "components/GroupCategories";
import ListProduct from "components/ListProduct";
import useStore from "store/useStore";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
  const categories = useStore((state) => state.categories);
  const fetchCategories = useStore((state) => state.fetchCategories);
  const search = useStore((state) => state.querySearchProduct);
  const setSearch = useStore((state) => state.setSearch);
  const filterCategory = useStore((state) => state.filterCategory);
  const setFilter = useStore((state) => state.setFilterCategory);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterCategory = (value) => {
    filterCategory === value ? setFilter("") : setFilter(value);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="h-100 h-100 animated fadeIn">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Products App</h1>
        <Input icon={AiOutlineSearch} type="text" placeholder="Search" value={search} onChange={handleSearch} />
        <GroupCategories categories={categories} onClick={handleFilterCategory} compareValue={filterCategory} />
        <ListProduct />
      </div>
    </div>
  );
};

export default Products;
