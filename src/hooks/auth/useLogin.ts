/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { DASHBOARD } from "@/utils/constants/routeName";
import { LoginResponse } from "@/types/auth/LoginResponse";
import AxiosInstance from "@/utils/axios";


interface LoginVariables {
  email: string;
  password: string;
}
export const useLogin = () => {
  const router = useRouter();
  const nextUrl = DASHBOARD;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loginMutation = useMutation<LoginResponse, unknown, LoginVariables>({
    mutationFn: async ({ email, password }) => {
      if (!email || !password) {
        throw new Error("Email et mot de passe sont requis");
      }

      const cleanEmail = email.trim().toLowerCase();
      if (!cleanEmail.includes('@')) {
        throw new Error("Format d'email invalide");
      }

      console.log("Envoi des données:", { email: cleanEmail, password: "***" });

      const res = await AxiosInstance.post("/auth/admin/signin", {
        email: cleanEmail,
        password: password,
      });
      return res.data;
    },
    onSuccess: (data: any) => {
      console.log("Réponse de l'API:", data);
      if (data.statusCode === 201) {
        setCookie("access_token_gnawalma", data.data.token.access_token, {
          maxAge: 60 * 60 * 5,
          path: "/",
        });
        setCookie("profil_paygo_gnawalma", data.data.user, {
          maxAge: 60 * 60 * 5,
          path: "/",
        });
        if (data?.data?.token?.refresh_token) {
          setCookie("refresh_token_gnawalma", data.data.token.refresh_token, {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
          });
        }
        router.replace(nextUrl);
      } else {
        setErrorMessage(
          data.message || "Identifiant et/ou mot de passe incorrect. Veuillez réessayer."
        );
      }
    },
    onError: (error: any) => {
      console.error("Erreur de connexion:", error);
      
      if (error.response) {
        setErrorMessage(
          error.response.data?.message || 
          `Erreur ${error.response.status}: ${error.response.statusText}`
        );
      } else if (error.request) {
        setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
      } else {
        setErrorMessage(error.message || "Une erreur inattendue s'est produite.");
      }
    },
  });

  return {
    ...loginMutation,
    errorMessage,
  };
};
