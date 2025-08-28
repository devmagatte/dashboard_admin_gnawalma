import AxiosInstance from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import type { StatDashbordResponse } from "@/types/dashboard/statDashbord";
import { TopAtelierResponse } from "@/types/dashboard/topAtelier";


export const StatDashboard = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const getStatDashboardMutation = useMutation<StatDashbordResponse, unknown>({
        mutationFn: async () => {
        const res = await AxiosInstance.get("/admin/reports/dashboard");
        console.log(res.data);
        return res.data;
        },
        onSuccess: (data) => {
            if (data?.statusCode === 200) {
              return data.data;
            }
            setErrorMessage("Erreur lors de la récupération des informations du dashboard");
        },
        onError: (error: any) => {
            const firstError = error?.response?.data?.errors?.[0] ?? error?.message ?? "Erreur inconnue";
            setErrorMessage(firstError);
        },
    })

    return {
        ...getStatDashboardMutation,
        errorMessage,
    };
}

export const TopAtelierDashboard = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const getTopAtelierMutation = useMutation<TopAtelierResponse, unknown>({
        mutationFn: async () => {
        const res = await AxiosInstance.get("/admin/reports/top-shops");
        return res.data;
        },
        onSuccess: (data) => {
            if (data?.statusCode === 200) {
              return data.data;
            }
            setErrorMessage("Erreur lors de la récupération des informations du dashboard");
        },
        onError: (error: any) => {
            const firstError = error?.response?.data?.errors?.[0] ?? error?.message ?? "Erreur inconnue";
            setErrorMessage(firstError);
        },
    })

    return {
        ...getTopAtelierMutation,
        errorMessage,
    };
}