import { useQuery } from "@tanstack/react-query"
import { fetchCertificates } from "../api/fetch_certificate";
export const useFetchCertificates = ()=> {
    return useQuery({
        queryKey:["certificates"],
        queryFn:fetchCertificates,

    });
}