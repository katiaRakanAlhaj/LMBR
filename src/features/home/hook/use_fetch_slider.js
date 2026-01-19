import { useQuery } from "@tanstack/react-query"
import { fetchSlider } from "../api/fetch_slider";
export const useFetchSlider = ()=> {
    return useQuery({
        queryKey:["slider"],
        queryFn:fetchSlider,

    });
}