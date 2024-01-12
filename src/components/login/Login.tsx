import { useState } from "react";
import { handleLogin } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      setError(""); // Reset the error state

      if (!username || !password) {
        // setError("Stellen Sie sicher, dass die Eingänge ausgefüllt sind.");
        throw new Error("Stellen Sie sicher, dass die Eingänge ausgefüllt sind.");
      }

      // await handleLogin(username, password);
      const response = await handleLogin(username, password);
      console.log("ressss: ", response);
      // On successful login, redirect projects page
      // navigate("/projects");
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://dev.june.local:8008/api/auth/login_check",
  //       {
  //         username,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // On success
  //     if (response.status === 200) {
  //       console.log("Anmeldung erfolgreich!");
  //       // Redirecting the user to "projects list".
  //     } else {
  //       setError(response.data.message || "Ungültiger Benutzername oder Passwort");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error.message);
  //     setError("Beim Anmelden ist ein Fehler aufgetreten");
  //   }
  // };

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

        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
