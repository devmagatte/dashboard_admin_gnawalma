import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import Router from "next/router";

// =======================
// Constantes
// =======================
const ACCESS_TOKEN_KEY = "access_token_gnawalma";
const REFRESH_TOKEN_KEY = "refresh_token_gnawalma";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

const AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =======================
// Helpers Tokens
// =======================
function saveTokens(access: string, refresh?: string, expiration?: string) {
  setCookie(ACCESS_TOKEN_KEY, access, { maxAge: 60 * 60 * 5, path: "/" });
  if (refresh) {
    setCookie(REFRESH_TOKEN_KEY, refresh, { maxAge: 60 * 60 * 24 * 7, path: "/" });
  }

  if (expiration) {
    // ⚡ Tu peux garder ça si tu veux gérer un refresh proactif
    console.log("Expiration du token :", expiration);
  }
}

function clearTokens() {
  deleteCookie(ACCESS_TOKEN_KEY);
  deleteCookie(REFRESH_TOKEN_KEY);
}

// =======================
// File d’attente pendant refresh
// =======================
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

// =======================
// Intercepteur Requête
// =======================
AxiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const token = getCookie(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// =======================
// Intercepteur Réponse
// =======================
AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!error.config) {
      return Promise.reject(error);
    }

    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    const status = error.response?.status;

    if (status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // Marquer comme déjà retenté pour éviter une boucle infinie
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
      const refreshToken = getCookie(REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        throw new Error("Missing refresh token");
      }

      // Appel refresh token
      const refreshResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/refresh-tokens`,
        { refresh_token: refreshToken },
        { headers: { "Content-Type": "application/json" } }
      );

      const newAccess: string | undefined = refreshResponse?.data?.data?.token?.access_token;
      const newRefresh: string | undefined = refreshResponse?.data?.data?.token?.refresh_token;
      const expiration: string | undefined = refreshResponse?.data?.data?.token?.expiration_token;

      if (!newAccess) {
        throw new Error("No access token in refresh response");
      }

      saveTokens(newAccess, newRefresh, expiration);

      processQueue(null, newAccess);

      if (originalRequest.headers) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
      }

      return AxiosInstance(originalRequest);
    } catch (refreshErr) {
      processQueue(refreshErr, null);
      clearTokens();

      // 🔄 Redirection optionnelle vers login
      Router.push("");

      return Promise.reject(refreshErr);
    } finally {
      isRefreshing = false;
    }
  }
);

export default AxiosInstance;
