import PropTypes from "prop-types";

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "5px",
  // border: "none",
  cursor: "pointer",
};

function Button({
  type = "button",
  className = "",
  children,
  size = "",
  onClick,
}) {
  return (
    <button
      style={style}
      className={className}
      type={type}
      size={size}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

//validate prop

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
