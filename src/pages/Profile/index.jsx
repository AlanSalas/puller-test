import Card from "components/Card";
import Avatar from "components/Avatar";

const cardStyle = {
  alignItems: "center",
};

const Profile = () => {
  return (
    <div className="w-100 h-100">
      <div className="container">
        <h1 className="color-tertiary font-xl text-center mb-2">Profile</h1>
        <Card style={cardStyle}>
          <Avatar name="Alan" style={{ width: "7rem", height: "7rem" }} />
          <p className="color-tertiary font-lg my-1">Alan Salas</p>
          <p className="color-tertiary font-lg mb-1">dubekone@gmail.com</p>
          <p className="color-tertiary font-lg mb-1">Sarface</p>
          <p className="color-tertiary font-lg mb-1">Products created: 10</p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
