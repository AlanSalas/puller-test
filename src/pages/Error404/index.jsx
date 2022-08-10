import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-404 animated fadeIn">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">404 Not Found</h1>
        <h2 className="color-tertiary font- text-center mb-2 bold">What are you looking for? 🧐</h2>
        <div className="w-100 d-flex justify-center">
          <Button onClick={() => navigate("/")} color="btn--info">
            Go to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
