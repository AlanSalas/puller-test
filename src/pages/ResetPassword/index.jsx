import { useState } from "react";
import Card from "components/Card";
import ResetPasswordForm from "components/Forms/ResetPasswordForm";
import Button from "components/Button";
import jwtDecode from "jwt-decode";
import useStore from "store/useStore";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { willExpireToken } from "api/auth";

const ResetPassword = () => {
  const { token } = useParams();
  const isValidToken = /^[0-9a-zA-Z]*\.[0-9a-zA-Z]*\.[0-9a-zA-Z-_]*$/.test(token);
  const [isExpired] = useState(isValidToken ? willExpireToken(token) : null);
  const isAuth = useStore((state) => state.token);
  const decodeToken = jwtDecode(token);
  const navigate = useNavigate();

  const handleGoToGenerateNewLink = () => navigate("/forgot-password");

  if (!isValidToken) {
    return (
      <Navigate
        to={{
          pathname: "/error/404",
        }}
      />
    );
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-100 h-100">
      <div className="container">
        {!isExpired ? (
          <>
            <h1 className="color-tertiary font-xl text-center mb-2">Reset password</h1>
            <h2 className="color-tertiary font-lg text-center mb-2">Please write your new password</h2>
            <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
              <ResetPasswordForm id={decodeToken && decodeToken.id} />
            </Card>
          </>
        ) : (
          <>
            <h1 className="color-tertiary font-xl text-center mb-2">Opps! This link has expired</h1>
            <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
              <h3 className="color-tertiary font-lg text-center mb-2">Generate new link to reset your password</h3>
              <div className="w-100 d-flex justify-center">
                <Button onClick={handleGoToGenerateNewLink} color="btn--info">
                  Generate
                </Button>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
