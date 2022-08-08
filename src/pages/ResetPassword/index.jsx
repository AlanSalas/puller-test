import Card from "components/Card";
import ResetPasswordForm from "components/Forms/ResetPasswordForm";
import "./style.css";

const ResetPassword = () => {
  return (
    <div className="reset-page">
      <div className="container">
        <h1 className="color-tertiary text-center">Reset password</h1>
        <h2 className="color-tertiary text-center">Please write your new password</h2>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <ResetPasswordForm />
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
