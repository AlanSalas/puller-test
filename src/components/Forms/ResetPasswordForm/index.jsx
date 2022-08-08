import Input from "components/Input";
import CustomLink from "components/CustomLink";
import Button from "components/Button";
import { AiOutlineLock } from "react-icons/ai";

const ResetPasswordForm = () => {
  return (
    <form style={{ width: "100%", height: "100%" }}>
      <Input icon={AiOutlineLock} type="password" placeholder="New password" />
      <Button type="btn--info">Reset</Button>
      <CustomLink style={{ margin: "1rem auto 0 auto" }} to="/login">
        Login
      </CustomLink>
    </form>
  );
};

export default ResetPasswordForm;
