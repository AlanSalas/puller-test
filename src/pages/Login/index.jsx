import Card from "components/Card";
import LoginForm from "components/Forms/LoginForm";
import "./style.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <h1 className="color-tertiary font-size-xl text-center">Login</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
};

export default Login;
