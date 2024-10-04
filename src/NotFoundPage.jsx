import { NavLink } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 Page Not found</h1>
      <NavLink to="/dashboard">Return to Home</NavLink>
    </div>
  );
}

export default NotFoundPage;
