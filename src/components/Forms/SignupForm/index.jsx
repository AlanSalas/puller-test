import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import useStore from "store/useStore";
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { toast } from "react-toastify";
import { register } from "api/user";
import { signupSchema } from "components/Forms/validationSchemas";
import { useFormik } from "formik";

const SignupForm = () => {
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      startLoad();
      const res = await register(values);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        resetForm();
      } else {
        toast.error(res?.data?.message);
      }
      finishLoad();
    },
    validationSchema: signupSchema,
  });

  return (
    <form className="w-100 h-100" onSubmit={formik.handleSubmit}>
      <Input
        icon={AiOutlineUser}
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        icon={AiOutlineUser}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <Input
        icon={AiOutlineUser}
        type="text"
        name="username"
        placeholder="Username"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" color="btn--info">
        {loading ? "Loading..." : "Register"}
      </Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
        Login
      </CustomLink>
    </form>
  );
};

export default SignupForm;
