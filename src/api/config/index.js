import axios from "axios";

const axiosConfig = {
  baseURL: "https://agile-chamber-70057.herokuapp.com/api/",
  headers: { "Content-Type": "application/json" },
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;
