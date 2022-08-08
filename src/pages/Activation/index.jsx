import Card from "components/Card";
import Button from "components/Button";

const Activation = () => {
  return (
    <div className="w-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Acivate your account</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <h3 className="color-tertiary font-lg text-center mb-2">Activate your account to login in the App!</h3>
          <div className="w-100 d-flex justify-center">
            <Button type="btn--success">Activate</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Activation;
