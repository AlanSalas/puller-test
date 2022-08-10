import { useEffect, useState } from "react";
import NavigationButton from "components/NavigationButton";
import GroupCategories from "components/GroupCategories";
import Button from "components/Button";
import useStore from "store/useStore";
import { toast } from "react-toastify";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteCategory } from "api/category";

const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Categories = () => {
  const [category, setCategory] = useState(null);
  const [id, setId] = useState(null);
  const categories = useStore((state) => state.categories);
  const fetchCategories = useStore((state) => state.fetchCategories);
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const endLoad = useStore((state) => state.finishLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleGoBack = () => navigate(from);
  const handleGoCreateCategory = () => navigate("/category/create", { state: "/categories" });

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async () => {
    startLoad();
    const res = await deleteCategory(id);
    if (res?.status === 200) {
      toast.success(res?.data?.message);
      navigate("/");
    } else {
      toast.error(res?.data?.message);
    }
    endLoad();
  };

  const selectCategory = (value, id) => {
    category === value ? setCategory("") : setCategory(value);
    setId(id);
  };

  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-1">Categories</h1>
        <h2 className="color-tertiary font-md text-center mb-2">Select category to delete</h2>
        <GroupCategories categories={categories} onClick={selectCategory} compareValue={category} page />
        <div className="my-3 d-flex justify-space-around">
          <Button style={btnStyle} color="btn--success" onClick={handleGoCreateCategory}>
            Add <AiOutlinePlus />
          </Button>
          <Button onClick={handleDelete} style={btnStyle} color="btn--error">
            {loading ? (
              "Loading..."
            ) : (
              <>
                Delete <AiOutlineDelete />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
