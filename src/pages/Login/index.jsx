import Card from "components/Card";
import LoginForm from "components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="w-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Login</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
};

export default Login;
