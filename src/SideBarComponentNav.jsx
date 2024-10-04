import Button from "./Button";
import ComponentDesc from "./ComponentDesc";
import { PropTypes } from "prop-types";

function SideBarComponentNav({
  buttonMessage,
  buttonIcon,
  topic,
  message,
  showIcon = "true",
}) {
  return (
    <div className="point-sales">
      <ComponentDesc topic={topic} message={message} />
      {showIcon === "true" ? (
        <Button className="form-button cart-btn">
          {buttonIcon}
          <span>{buttonMessage}</span>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
// "Sales" "Manage all sales here." <IoCartOutline size={30} /> <span>View Cart</span>
SideBarComponentNav.propTypes = {
  buttonMessage: PropTypes.string,
  buttonIcon: PropTypes.element,
  topic: PropTypes.string,
  message: PropTypes.string,
  showIcon: PropTypes.string,
};
export default SideBarComponentNav;
