import axios from "axios";

const api = axios.create({
  baseURL: "https://kc-project-service.onrender.com/api",
  timeout: 5000,
});

export default api;
