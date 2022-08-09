import { useEffect, useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import GroupCategories from "components/GroupCategories";
import useStore from "store/useStore";
import { AiOutlineShop, AiOutlineDollar, AiOutlineAlignCenter, AiOutlineFileImage } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { createProductSchema } from "components/Forms/validationSchemas";
import { updateProduct } from "api/product";

const EditProductForm = () => {
  const { id } = useParams();
  const product = useStore((state) => state.productDetail);
  const fetchProduct = useStore((state) => state.fetchProductDetail);
  const [image, setImage] = useState(product?.image?.secureUrl ? product.image.secureUrl : null);
  const [category, setCategory] = useState(product.category);
  const categories = useStore((state) => state.categories);
  const fetchCategories = useStore((state) => state.fetchCategories);
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id);
    fetchCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: product.title,
      price: product.price?.$numberDecimal,
      description: product.description,
    },
    onSubmit: async (values, { resetForm }) => {
      startLoad();
      const res = await updateProduct(image, values, category, product._id);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        resetForm();
        navigate(`/product/${product._id}`);
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: createProductSchema,
  });

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSelectCategory = (value) => {
    setCategory(value);
  };

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      {image && (
        <div className="w-10rem h-10rem mx-auto mb-1">
          <img className="w-100 h-100 rounded" src={typeof image === "string" ? image : URL.createObjectURL(image)} />
        </div>
      )}
      <Input
        icon={AiOutlineShop}
        type="text"
        name="title"
        placeholder="Title"
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <Input
        icon={AiOutlineDollar}
        type="number"
        name="price"
        placeholder="Price"
        onChange={formik.handleChange}
        value={formik.values.price}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <Input
        icon={AiOutlineAlignCenter}
        type="text"
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Input
        icon={AiOutlineFileImage}
        type="file"
        name="image"
        placeholder="Upload Image"
        onChange={handleChangeImage}
      />
      <GroupCategories onClick={handleSelectCategory} categories={categories} compareValue={category} form />
      <Button type="submit" color="btn--info">
        {loading ? "Loading..." : "Edit"}
      </Button>
    </form>
  );
};

export default EditProductForm;
