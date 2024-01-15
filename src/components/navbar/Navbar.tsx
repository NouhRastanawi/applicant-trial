import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src="logo.png" alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/projects">Projekte</Link>
        </li>

        <li className="at-end">
          {user ? <p>{user.username}</p> : <></>}
          {user === null ? (
            <Link to="/login">Login</Link>
          ) : (
            <a className="logout" onClick={logout}>
              Logout
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
