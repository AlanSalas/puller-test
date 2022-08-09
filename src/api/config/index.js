import axios from "axios";
import { willExpireToken } from "api/auth";

const axiosConfig = {
  baseURL: "http://localhost:9292/api/",
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
