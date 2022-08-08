import Card from "components/Card";
import SignupForm from "components/Forms/SignupForm";
import "./style.css";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="container">
        <h1 className="color-tertiary font-size-xl text-center">Create account</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <SignupForm />
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
