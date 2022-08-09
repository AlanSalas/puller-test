import Card from "components/Card";
import NavigationButton from "components/NavigationButton";
import EditProfileForm from "components/Forms/EditProfileForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate("/profile");

  return (
    <div className="w-100 h-100">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-2">Edit profile</h1>
        <Card style={{ width: "100%", padding: "5rem 0.8rem" }}>
          <EditProfileForm />
        </Card>
      </div>
    </div>
  );
};

export default ProfileEdit;
