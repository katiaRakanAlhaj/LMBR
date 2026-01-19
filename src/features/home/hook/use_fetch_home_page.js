import { useQuery } from "@tanstack/react-query"
import { fetchHomePage } from "../api/fetch_home_page";
export const useFetchHomePage = ()=> {
    return useQuery({
        queryKey:["home_page"],
        queryFn:fetchHomePage,

    });
}