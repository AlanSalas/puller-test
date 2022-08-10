import { useEffect } from "react";
import NavigationButton from "components/NavigationButton";
import Card from "components/Card";
import Avatar from "components/Avatar";
import Button from "components/Button";
import useStore from "store/useStore";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getUserData } from "api/user";

const cardStyle = {
  alignItems: "center",
};

const Profile = () => {
  const { id } = useStore((state) => state.user);
  const profile = useStore((state) => state.profile);
  const setProfile = useStore((state) => state.setProfile);
  const navigate = useNavigate();
  const handleGoToEdit = () => navigate("/profile/edit");
  const handleGoBack = () => navigate("/");

  useEffect(() => {
    getUserData(id)
      .then((res) => {
        res?.status === 200 && setProfile(res?.data?.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-100 h-100 animated fadeIn">
      <div className="container">
        <NavigationButton icon={AiOutlineArrowLeft} onClick={handleGoBack} />
        <h1 className="color-tertiary font-xl text-center mb-2">Profile</h1>
        <Card style={cardStyle}>
          {profile && (
            <Avatar
              image={profile?.image?.secureUrl}
              name={profile?.name}
              style={{ width: "7rem", height: "7rem", fontSize: "3rem" }}
            />
          )}
          <p className="color-tertiary font-lg my-1">{`${profile?.name} ${profile?.lastName}`}</p>
          <p className="color-tertiary font-lg mb-1">{profile?.email}</p>
          <p className="color-tertiary font-lg mb-1">{profile?.username}</p>
          <Button onClick={handleGoToEdit} color="btn--info">
            Edit profile
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
