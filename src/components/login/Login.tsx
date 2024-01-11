import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://dev.june.local:8008/api/auth/login_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // On success
      if (response.ok) {
        console.log("Anmeldung erfolgreich!");
        // redirecting the user to "projects list".
      } else {
        const data = await response.json();
        setError(data.message || "Ungültiger Benutzername oder Passwort");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setError("Beim Anmelden ist ein Fehler aufgetreten");
    }
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

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
