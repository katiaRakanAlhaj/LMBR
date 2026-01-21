import { useQuery } from "@tanstack/react-query";
import { fetchSingleProject } from "../api/fetch_single_project";
export const useFetchSingleProject= (id) => {
  return useQuery({
    queryKey: ["project", id], // Include id in queryKey for proper caching
    queryFn: () => fetchSingleProject(id),
  });
};