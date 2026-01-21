import { useQuery } from "@tanstack/react-query";
import { fetchSingleService } from "../api/fetch_single_service";
export const useFetchSingleService = (id) => {
  return useQuery({
    queryKey: ["service", id], // Include id in queryKey for proper caching
    queryFn: () => fetchSingleService(id),
  });
};