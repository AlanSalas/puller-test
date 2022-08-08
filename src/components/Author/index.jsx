import Avatar from "components/Avatar";
import "./style.css";

const Author = ({ image, username }) => {
  return (
    <div className="author">
      <Avatar image={image} name={username} />
      <div className="author-details">
        <p className="color-primary font-sm">Author:</p>
        <p className="color-primary font-md">{username}</p>
      </div>
    </div>
  );
};

export default Author;
