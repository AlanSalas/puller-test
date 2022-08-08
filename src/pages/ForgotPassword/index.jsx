import Card from "components/Card";
import ForgotPasswordForm from "components/Forms/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="w-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Forgot password</h1>
        <h2 className="color-tertiary font-lg text-center mb-2">
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
