import Avatar from "components/Avatar";
import "./style.css";

const avatarStyle = {
  height: "3rem",
  width: "3rem",
};

const Author = ({ image, username, style, detail }) => {
  return (
    <div style={{ ...style }} className="author">
      <Avatar style={detail && avatarStyle} image={image} name={username} />
      <div className="author-details">
        <p className={detail ? "color-tertiary font-md" : "color-primary font-sm"}>Author:</p>
        <p className={detail ? "color-tertiary font-lg" : "color-primary font-md"}>{username}</p>
      </div>
    </div>
  );
};

export default Author;
