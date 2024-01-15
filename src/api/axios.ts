import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to the axios instance for modifying requests before they are sent
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem("jwtToken");

    // If a token is present, add the Authorization header to the request
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified configuration for the request
    return config;
  },
  // Handle any errors that occur in the interceptor and reject the promise
  (error) => Promise.reject(error)
);

export default axiosInstance;
