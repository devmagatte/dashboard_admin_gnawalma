import AxiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface ICouturierParams {
    page: number;
    limit: number;
    type: string;
  }
  
  export const  ListCouturier = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    const getListCouturiertMutation = useMutation<ListCouturierResponse, unknown, ICouturierParams>({
        mutationFn: async ({type, page, limit}) => {
                
        const res = await AxiosInstance.get(`/user?type=${type}&page=${page}&limit=${limit}`);
        return res.data;
        },
        onSuccess: (data: any) => {
            if (data.statusCode === 200) {
              return data.data;
            } else {
              setErrorMessage(
                "Erreur lors de la récupération de la liste des couturiers"
              );
            }
          },
        onError: (error: any) => {
        setErrorMessage(error.response.data.errors[0]);
        },
    })
    return {
        ...getListCouturiertMutation,
        errorMessage,
    };
  }