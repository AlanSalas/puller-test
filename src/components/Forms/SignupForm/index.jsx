import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const SignupForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={AiOutlineUser} type="text" placeholder="Name" />
      <Input icon={AiOutlineUser} type="text" placeholder="Last Name" />
      <Input icon={AiOutlineUser} type="text" placeholder="Username" />
      <Input icon={AiOutlineMail} type="text" placeholder="Email" />
      <Input icon={AiOutlineLock} type="password" placeholder="Password" />
      <Button type="btn--info">Register</Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
        Login
      </CustomLink>
    </form>
  );
};

export default SignupForm;
