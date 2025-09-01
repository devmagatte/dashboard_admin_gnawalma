import AxiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface ICouturierParams {
  page: number;
  limit: number;
  type: string;
}


export const ListCouturier = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getListCouturierMutation = useMutation<
    ListCouturierResponse,
    unknown,
    ICouturierParams
  >({
    mutationFn: async ({type, page, limit }) => {
      const res = await AxiosInstance.get(
        `/user?type=${type}&page=${page}&limit=${limit}`
      );
       return res.data as ListCouturierResponse;
    },
    onSuccess: (data) => {
      if (data.statusCode !== 200) {
        setErrorMessage("Erreur lors de la récupération de la liste des couturiers");
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
    ...getListCouturierMutation,
    errorMessage,
  };
};
