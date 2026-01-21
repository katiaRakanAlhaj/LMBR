import { useQuery } from "@tanstack/react-query"
import { fetchContactPage } from "../api/fetch_contact_page";
export const useFetchContactPage = ()=> {
    return useQuery({
        queryKey:["contact-us-page"],
        queryFn:fetchContactPage,

    });
}