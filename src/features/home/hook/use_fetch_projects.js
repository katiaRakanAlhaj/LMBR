import { useQuery } from "@tanstack/react-query"
import { fetchProjects } from "../api/fetch_projects";
export const useFetchProjects = ()=> {
    return useQuery({
        queryKey:["our-projects"],
        queryFn:fetchProjects,

    });
}