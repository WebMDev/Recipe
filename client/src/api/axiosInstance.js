import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

// Interceptor for response
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // ya React router ka navigate use karo
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;