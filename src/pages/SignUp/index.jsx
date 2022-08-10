import Card from "components/Card";
import SignupForm from "components/Forms/SignupForm";

const SignUp = () => {
  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Create account</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <SignupForm />
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
