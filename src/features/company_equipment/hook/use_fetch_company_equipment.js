import { useQuery } from "@tanstack/react-query"
import { fetchCompanyEquipment } from './../api/fetch_company_equipment';
export const useFetchCompanyEquipment = ()=> {
    return useQuery({
        queryKey:["company_equipment"],
        queryFn:fetchCompanyEquipment,

    });
}