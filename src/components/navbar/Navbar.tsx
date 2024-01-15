import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log("navbar user: ", user);

  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img className="logo" src="logo.png" alt="Logo" />
          </a>
        </li>
        <li>
          <a href="/projects">Projekte</a>
        </li>
        <li>
          {user ? (
            <a href="/login">Login</a>
          ) : (
            <a className="logout" onClick={logout}>
              Logout
            </a>
          )}
        </li>
        {user ? <li>{user.username}</li> : <></>}
      </ul>
    </nav>
  );
};

export default Navbar;
