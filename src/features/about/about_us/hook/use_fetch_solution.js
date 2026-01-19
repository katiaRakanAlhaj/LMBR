import { useQuery } from "@tanstack/react-query"
import { fetchSolutions } from "../api/fetch_solution";
export const useFetchSolutions = ()=> {
    return useQuery({
        queryKey:["solution"],
        queryFn:fetchSolutions,

    });
}