import Card from "components/Card";
import ResetPasswordForm from "components/Forms/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="w-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Reset password</h1>
        <h2 className="color-tertiary font-lg text-center mb-2">Please write your new password</h2>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <ResetPasswordForm />
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
