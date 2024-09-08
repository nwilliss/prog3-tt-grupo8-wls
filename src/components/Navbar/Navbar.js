import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../logo/logo-wls.png" alt="Logo" />
      </div>
      <ul className="nav-header">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </ul>
    </nav>
  );
};

export default Navbar;