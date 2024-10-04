import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <nav>
        <p>Home</p>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <main>Welcome to Assiniga Enterprise</main>
    </div>
  );
}

export default HomePage;
