import "./style.css";

const Avatar = ({ image, name, style }) => {
  return (
    <div style={{ ...style }} className="avatar">
      {image && <img className="avatar-img" src={image} alt={name} />}
      {!image && <p>{name.split("")[0]}</p>}
    </div>
  );
};

export default Avatar;
