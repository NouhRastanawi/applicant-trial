import axiosInstance from "../api/axios";

export const handleLogin = async (username, password) => {
  try {
    // Send a POST request to the authentication endpoint with provided credentials
    const response = await axiosInstance.post("auth/login_check", {
      username,
      password,
    });
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};
