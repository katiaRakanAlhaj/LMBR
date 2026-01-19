import { useQuery } from "@tanstack/react-query"
import { fetchGoals } from "../api/fetch_goals";
export const useFetchGoals = ()=> {
    return useQuery({
        queryKey:["goals"],
        queryFn:fetchGoals,

    });
}