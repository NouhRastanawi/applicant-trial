import axiosInstance from "../api/axios";

export const handleLogin = async (username, password) => {
  try {
    const response = await axiosInstance.post("auth/login_check", {
      username,
      password,
    });
  } catch (error) {
    // ... error handling
  }
};
