import { PropTypes } from "prop-types";

function Sidebar({ children }) {
  return (
    <>
      <aside>{children}</aside>
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.array,
};
export default Sidebar;
