import Card from "components/Card";
import ForgotPasswordForm from "components/Forms/ForgotPasswordForm";
import "./style.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-page">
      <div className="container">
        <h1 className="color-tertiary text-center">Forgot password</h1>
        <h2 className="color-tertiary text-center">
          We will send you a link to your email then you can reset your password.
        </h2>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <ForgotPasswordForm />
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
