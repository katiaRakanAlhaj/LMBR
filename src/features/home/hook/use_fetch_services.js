import { useQuery } from "@tanstack/react-query"
import { fetchServices } from "../api/fetch_services";
export const useFetchServices = ()=> {
    return useQuery({
        queryKey:["services"],
        queryFn:fetchServices,

    });
}