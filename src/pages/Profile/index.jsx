import Card from "components/Card";
import Avatar from "components/Avatar";
import "./style.css";

const cardStyle = {
  alignItems: "center",
};

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <h1 className="color-tertiary text-center">Profile</h1>
        <Card style={cardStyle}>
          <Avatar name="Alan" style={{ width: "7rem", height: "7rem" }} />
          <p style={{ margin: "1rem 0" }} className="color-tertiary font-lg">
            Alan Salas
          </p>
          <p style={{ marginBottom: "1rem" }} className="color-tertiary font-lg">
            dubekone@gmail.com
          </p>
          <p style={{ marginBottom: "1rem" }} className="color-tertiary font-lg">
            Sarface
          </p>
          <p style={{ marginBottom: "1rem" }} className="color-tertiary font-lg">
            Products created: 10
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
