import axios from "axios";
import { getCookie } from "cookies-next";

// Utiliser le proxy local pour éviter les problèmes CORS
const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const token = getCookie("access_token_gnawalma");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
