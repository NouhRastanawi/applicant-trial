import { useState, useContext } from "react";
import { handleLogin } from "../../hooks/useAuth";
import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import { log } from "console";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const { user, login, error } = useContext(AuthContext);
  // const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    await login({ username, password });
  };
  // const login = async () => {
  //   try {
  //     setError(""); // Reset the error state

  //     if (!username || !password) {
  //       throw new Error("Stellen Sie sicher, dass die Eingänge ausgefüllt sind.");
  //     }

  //     const response = await handleLogin(username, password);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <div>
          <div>
            <label id="username">Nutzername:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label id="password">Passwort:</label>
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
