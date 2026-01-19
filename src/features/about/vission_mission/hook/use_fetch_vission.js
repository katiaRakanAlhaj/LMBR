import { useQuery } from "@tanstack/react-query"
import { fetchVission } from "../api/fetch_vission";
export const useFetchVission = ()=> {
    return useQuery({
        queryKey:["vision-and-mission"],
        queryFn:fetchVission,

    });
}