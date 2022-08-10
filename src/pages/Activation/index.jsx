import { useState } from "react";
import Card from "components/Card";
import Button from "components/Button";
import useStore from "store/useStore";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { willExpireToken, activateUser, sendEmailToActivate } from "api/auth";

const Activation = () => {
  const { token } = useParams();
  const isValidToken = /^[0-9a-zA-Z]*\.[0-9a-zA-Z]*\.[0-9a-zA-Z-_]*$/.test(token);
  const [isExpired] = useState(isValidToken ? willExpireToken(token) : null);
  const loading = useStore((state) => state.loading);
  const startLoad = useStore((state) => state.startLoading);
  const finishLoad = useStore((state) => state.finishLoading);
  const isAuth = useStore((state) => state.token);
  const decodeToken = isValidToken && jwtDecode(token);
  const navigate = useNavigate();

  const handleActivate = async () => {
    try {
      startLoad();
      const res = await activateUser(decodeToken.id);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
      navigate("/login");
      finishLoad();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendEmail = async () => {
    try {
      startLoad();
      const res = await sendEmailToActivate(decodeToken.id);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
      navigate("/login");
      finishLoad();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isValidToken) {
    return <Navigate to="/error404" />;
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        {!isExpired ? (
          <>
            <h1 className="color-tertiary font-xl text-center mb-2">Activate your account</h1>
            <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
              <h3 className="color-tertiary font-lg text-center mb-2">Activate your account to login in the App!</h3>
              <div className="w-100 d-flex justify-center">
                <Button onClick={handleActivate} color="btn--success">
                  {loading ? "Loading..." : "Activate"}
                </Button>
              </div>
            </Card>
          </>
        ) : (
          <>
            <h1 className="color-tertiary font-xl text-center mb-2">Opps! This link has expired</h1>
            <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
              <h3 className="color-tertiary font-lg text-center mb-2">Generate new link to activate your account</h3>
              <div className="w-100 d-flex justify-center">
                <Button onClick={handleSendEmail} color="btn--info">
                  {loading ? "Loading..." : "Generate"}
                </Button>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Activation;
