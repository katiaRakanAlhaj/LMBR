import { useQuery } from "@tanstack/react-query"
import { fetchCompanies, fetchSingleCompany } from "../api/fetch_company";
export const useFetchCompanies = ()=> {
    return useQuery({
        queryKey:["companies"],
        queryFn:fetchCompanies,

    });
}
export const useFetchSingleCompany= (id) => {
  return useQuery({
    queryKey: ["company", id], // Include id in queryKey for proper caching
    queryFn: () => fetchSingleCompany(id),
  });
};