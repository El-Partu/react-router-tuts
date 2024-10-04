import { RxHamburgerMenu } from "react-icons/rx";
import profileIcon from "./assets/icons/User.svg";
import LogoutIcon from "./assets/icons/Logout.svg";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
function Nav({ onHamburgerClick, isactive, onActive, setEditProfile }) {
  function humbergurClick() {
    onHamburgerClick();
    onActive(isactive);
  }
  return (
    <>
      <nav>
        <div>
          <RxHamburgerMenu
            className="humbeurger"
            size={24}
            onClick={humbergurClick}
          />
          <p>ASSSINIGA ENTERPRISE</p>
        </div>
        <div>
          <img
            src={profileIcon}
            alt="user profile icon"
            onClick={() => setEditProfile(true)}
          />
          <NavLink to="/login">
            <img src={LogoutIcon} alt="Logout icon" />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  onHamburgerClick: PropTypes.func,
  isactive: PropTypes.number,
  onActive: PropTypes.func,
  setEditProfile: PropTypes.func,
};
export default Nav;
