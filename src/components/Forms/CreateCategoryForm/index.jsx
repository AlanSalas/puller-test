import Input from "components/Input";
import Button from "components/Button";
import useStore from "store/useStore";
import { MdCategory } from "react-icons/md";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createCategory } from "api/category";
import { createCategorySchema } from "components/Forms/validationSchemas";

const CreateCategoryForm = () => {
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      startLoad();
      const res = await createCategory(values);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        navigate("/categories");
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: createCategorySchema,
  });

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      <Input
        icon={MdCategory}
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <div className="w-100 d-flex flex-dir-column justify-center align-center">
        <Button type="submit" color="btn--info">
          {loading ? "Loading..." : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default CreateCategoryForm;
