import "./style.css";

const Input = ({
  icon: Icon,
  type,
  name,
  placeholder,
  style,
  value,
  onChange,
  error,
  helperText,
  autoComplete = "false",
}) => {
  return (
    <>
      <div style={{ ...style }} className="custom-input">
        <Icon />
        <input
          autoComplete={autoComplete}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p className="custom-input-error">{helperText}</p>}
    </>
  );
};

export default Input;
