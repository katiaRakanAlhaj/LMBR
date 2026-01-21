import { useQuery } from "@tanstack/react-query"
import { fetchFooter } from "../api/fetch_footer";
export const useFetchFooter = ()=> {
    return useQuery({
        queryKey:["footer"],
        queryFn:fetchFooter,

    });
}