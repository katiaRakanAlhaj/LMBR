import { useQuery } from "@tanstack/react-query"
import { fetchAboutUs } from "../api/fetch_about_us";
export const useFetchAboutUs = ()=> {
    return useQuery({
        queryKey:["about-us-page"],
        queryFn:fetchAboutUs,

    });
}