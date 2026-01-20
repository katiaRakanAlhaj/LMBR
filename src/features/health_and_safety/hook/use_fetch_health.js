import { useQuery } from "@tanstack/react-query"
import { fetchHealth } from "../api/fetch_health";
export const useFetchHealth = ()=> {
    return useQuery({
        queryKey:["health"],
        queryFn:fetchHealth,

    });
}