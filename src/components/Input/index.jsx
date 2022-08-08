import "./style.css";

const Input = ({ icon: Icon, type, placeholder, style, value, onChange }) => {
  return (
    <div style={{ ...style }} className="custom-input">
      <Icon />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
