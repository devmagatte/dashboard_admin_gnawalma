import { ListRecentesActivitesResponse } from "@/types/activitesrecentes/listActivitesRecentes";
import AxiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


export const ListRecentesActivites = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getListRecentesActivitesMutation = useMutation<
  ListRecentesActivitesResponse,
    unknown
  >({
    mutationFn: async () => {
      const res = await AxiosInstance.get(
        `/admin/reports/recent-activity`
      );
       return res.data as ListRecentesActivitesResponse;
    },
    onSuccess: (data) => {
      if (data.statusCode !== 200) {
        setErrorMessage("Erreur lors de la récupération de la liste des Activitées recentes");
      } else {
          return data.data; // reset en cas de succès
      }
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.errors?.[0] ||
        error?.message ||
        "Erreur inattendue";
      setErrorMessage(message);
    },
  });

  return {
    ...getListRecentesActivitesMutation,
    errorMessage,
  };
};
