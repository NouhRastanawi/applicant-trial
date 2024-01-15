import Login from "../components/login/Login";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
      return;
    }
  }, [user]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
