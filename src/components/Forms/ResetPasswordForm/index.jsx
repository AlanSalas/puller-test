import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import useStore from "store/useStore";
import { useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { toast } from "react-toastify";
import { updatePassword } from "api/auth";
import { resetPasswordSchema } from "components/Forms/validationSchemas";
import { useFormik } from "formik";

const ResetPasswordForm = ({ id }) => {
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      startLoad();
      const res = await updatePassword(id, values.password);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        resetForm();
        navigate("/login");
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: resetPasswordSchema,
  });

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      <Input
        icon={AiOutlineLock}
        type="password"
        name="password"
        placeholder="New password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <div className="w-100 d-flex flex-dir-column justify-center align-center">
        <Button type="submit" color="btn--info">
          {loading ? "Loading..." : "Send"}
        </Button>
        <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
          Login
        </CustomLink>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
