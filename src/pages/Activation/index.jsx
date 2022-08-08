import Card from "components/Card";
import Button from "components/Button";
import "./style.css";

const Activation = () => {
  return (
    <div className="activation">
      <div className="container">
        <h1 className="color-tertiary text-center">Acivate your account</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <h3 className="color-tertiary text-center">Activate your account to login in the App!</h3>
          <div className="activation-action">
            <Button type="btn--success">Activate</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Activation;
