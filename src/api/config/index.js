import axios from "axios";
import { willExpireToken } from "api/auth";

const axiosConfig = {
  baseURL: "https://agile-chamber-70057.herokuapp.com/api/",
  headers: { "Content-Type": "application/json" },
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    if (willExpireToken(token)) {
      config.headers.Authorization = "";
    }
  } else {
    config.headers.Authorization = "";
  }
  return config;
});

export default axiosInstance;
