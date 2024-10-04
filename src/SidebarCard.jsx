import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function SidebarCard({ name, icon, pathway, onActive, isactive, id }) {
  return (
    <div className="aside-link">
      <NavLink
        to={pathway}
        className={isactive === id ? "sidebar-card isactive" : "sidebar-card"}
        onClick={() => onActive(id)}
      >
        {icon}
        <p>{name}</p>
      </NavLink>
    </div>
  );
}

SidebarCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  pathway: PropTypes.string,
  onActive: PropTypes.func,
  isactive: PropTypes.number,
  id: PropTypes.number,
};

export default SidebarCard;
