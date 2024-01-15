import { createContext, useContext, ReactNode, useState } from "react";
import { handleLogin } from "../hooks/useAuth";

// Define the type for user data
// type UserData = {
//   username: string;
//   email: string;
//   id: number;
//   roles: []
//   // ...
// };

type UserData = {
  id: number;
  username: string;
  email: string;
  modules: string[];
  groups: {
    id: number;
    name: string;
  }[];
  customer: {
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

  const login = async ({ username, password }) => {
    try {
      setError(null); // Reset the error state

      if (!username || !password) {
        throw new Error("Stellen Sie sicher, dass die Eingänge ausgefüllt sind.");
      }

      const data = await handleLogin(username, password);
      localStorage.setItem("user", data.user);
      localStorage.setItem("jwtToken", data.token);
      setUser(data.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    setUser(null);
  };

  // Provide the context value to the children
  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>{children}</AuthContext.Provider>
  );
};
