import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import { AiOutlineMail } from "react-icons/ai";

const ForgotPasswordForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={AiOutlineMail} type="text" placeholder="Email" />
      <Button type="btn--info">Send</Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
        Login
      </CustomLink>
    </form>
  );
};

export default ForgotPasswordForm;
