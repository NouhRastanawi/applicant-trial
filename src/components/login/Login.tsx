import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);

  const submitForm = async (event) => {
    event.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <div>
          <div>
            <label>Nutzername:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Passwort:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <button type="button" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
