import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import useStore from "store/useStore";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";
import { forgotPassword } from "api/auth";
import { forgotPasswordSchema } from "components/Forms/validationSchemas";
import { useFormik } from "formik";

const ForgotPasswordForm = () => {
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, { resetForm }) => {
      startLoad();
      const res = await forgotPassword(values.email);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        resetForm();
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: forgotPasswordSchema,
  });

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      <Input
        icon={AiOutlineMail}
        type="text"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Button type="submit" color="btn--info">
        {loading ? "Loading..." : "Send"}
      </Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
        Login
      </CustomLink>
    </form>
  );
};

export default ForgotPasswordForm;
