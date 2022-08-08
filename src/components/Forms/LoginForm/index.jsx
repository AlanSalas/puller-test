import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={AiOutlineMail} type="text" placeholder="Email" />
      <Input icon={AiOutlineLock} type="password" placeholder="Password" />
      <CustomLink to="/forgot-password">Forgot your password?</CustomLink>
      <Button type="btn--info">Login</Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/signup">
        Sign Up
      </CustomLink>
    </form>
  );
};

export default LoginForm;
