import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import useStore from "store/useStore";
import { toast } from "react-toastify";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { login } from "api/auth";
import { loginSchema } from "components/Forms/validationSchemas";
import { useFormik } from "formik";

const LoginForm = () => {
  const setToken = useStore((state) => state.setToken);
  const loading = useStore((state) => state.loginLoading);
  const startLoginLoad = useStore((state) => state.startLoginLoad);
  const endLoginLoad = useStore((state) => state.endLoginLoad);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      startLoginLoad();
      const res = await login(values);
      if (res?.status === 200) {
        console.log("login...");
        setToken(res?.data?.accessToken);
        localStorage.setItem("token", res?.data?.accessToken);
      } else {
        toast.error(res?.data?.message);
      }
      endLoginLoad();
    },
    validationSchema: loginSchema,
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
      <Input
        icon={AiOutlineLock}
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.email && Boolean(formik.errors.password)}
        helperText={formik.touched.email && formik.errors.password}
      />
      <CustomLink to="/forgot-password">Forgot your password?</CustomLink>
      <Button type="submit" color="btn--info">
        {loading ? "Loading..." : "Login"}
      </Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/signup">
        Sign Up
      </CustomLink>
    </form>
  );
};

export default LoginForm;
