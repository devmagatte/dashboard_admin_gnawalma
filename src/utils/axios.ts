import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

// Utiliser le proxy local pour éviter les problèmes CORS
const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
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

// Refresh token logic
let isRefreshing = false;
let pendingQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

function processQueue(error: unknown, token: string | null) {
  pendingQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
  pendingQueue = [];
}

AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    const status = error.response?.status;

    if (status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // Eviter boucles
    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingQueue.push({ resolve, reject });
      })
        .then((token) => {
          if (typeof token === "string" && originalRequest.headers) {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
          }
          return AxiosInstance(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    isRefreshing = true;
    try {
      const refreshToken = getCookie("refresh_token_gnawalma");
      if (!refreshToken) {
        throw new Error("Missing refresh token");
      }

      // Adapter l'endpoint si nécessaire côté API
      const refreshResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/admin/refresh`,
        { refresh_token: refreshToken },
        { headers: { "Content-Type": "application/json" } }
      );

      const newAccess: string | undefined = refreshResponse?.data?.data?.token?.access_token;
      const newRefresh: string | undefined = refreshResponse?.data?.data?.token?.refresh_token;

      if (!newAccess) {
        throw new Error("No access token in refresh response");
      }

      setCookie("access_token_gnawalma", newAccess, { maxAge: 60 * 60 * 5, path: "/" });
      if (newRefresh) {
        setCookie("refresh_token_gnawalma", newRefresh, { maxAge: 60 * 60 * 24 * 7, path: "/" });
      }

      processQueue(null, newAccess);

      if (originalRequest.headers) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
      }

      return AxiosInstance(originalRequest);
    } catch (refreshErr) {
      processQueue(refreshErr, null);
      // Nettoyage des cookies si refresh échoue
      deleteCookie("access_token_gnawalma");
      deleteCookie("refresh_token_gnawalma");
      return Promise.reject(refreshErr);
    } finally {
      isRefreshing = false;
    }
  }
);

export default AxiosInstance;
