import "./style.css";

const NavigationButton = ({ icon: Icon, style, onClick }) => {
  return (
    <button className="navigation-button" style={{ ...style }} onClick={onClick}>
      <Icon />
    </button>
  );
};

export default NavigationButton;
