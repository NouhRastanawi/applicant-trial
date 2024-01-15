import { createContext, ReactNode, useState, useEffect } from "react";
import { handleLogin } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import * as Cookies from "js-cookie";

type UserData = {
  id: number;
  username: string;
  email: string;
  modules: string[];
  groups: Group[];
  customer: Customer;
  enabled: boolean;
  roles: string[];
  created_at: string | null;
  accepted_terms: boolean;
  integration_api_token: string | null;
  client_tour_data: any[];
  two_factor_authentication_enabled: boolean;
  two_factor_authentication_verified: boolean;
  intercom_hash: string;
  skill_level: number;
  ui_theme: string;
  ui_locale: string;
  is_activated: boolean;
  additional_email_addresses: string[] | null;
};

type Group = {
  id: number;
  name: string;
};

type Customer = {
  id: number;
  name: string;
  licenses: any[];
  technical_name: string;
  cdn_id: string;
  cdn_url: string;
  external_identifier: string;
  branding_level: number;
  enable_user_collaboration: boolean;
  force_two_factor_authentication: boolean;
};

// Define the type for the context value
type AuthContextType = {
  user: UserData | null;
  login: ({ username, password }: { username: string; password: string }) => void;
  logout: () => void;
  error: any;
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProviderProps type
type AuthProviderProps = {
  children: ReactNode;
};

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("user"));

      if (user) {
        setUser(user);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  const login = async ({ username, password }) => {
    try {
      setError(null); // Reset the error state

      if (!username || !password) {
        throw new Error("Stellen Sie sicher, dass die Eingänge ausgefüllt sind.");
      }

      const data = await handleLogin(username, password);

      // Set expiration date to 15 days from now
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 15);

      Cookies.set("user", JSON.stringify(data.user), { expires: expirationDate, path: "/" });
      Cookies.set("jwtToken", data.token, { expires: expirationDate, path: "/" });

      setUser(data.user);
      setTimeout(() => {
        navigate("/projects");
      }, 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    Cookies.remove("user", { path: "/" });
    Cookies.remove("jwtToken", { path: "/" });
    setUser(null);
  };

  // Provide the context value to the children
  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>{children}</AuthContext.Provider>
  );
};
