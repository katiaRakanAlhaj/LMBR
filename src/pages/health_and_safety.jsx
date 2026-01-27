import HealthAndSafetyGrid from "../features/health_and_safety/component/health_and_safety_grid";
import { useFetchHealth } from "../features/health_and_safety/hook/use_fetch_health";
import HealthAndSafetyImage from './../features/health_and_safety/component/health_and_safety_image';
import ScrollToTop from './../component/ScrollToTop/ScrollToTop';
const HealthAndSafety = () => {
    const {data:HealthAndSafetyData,isLoading:HealthAndSafetyDataLoading ,error:HealthAndSafetyDataError} = useFetchHealth();
    return (
        <div>
            <ScrollToTop/>
            <HealthAndSafetyImage HealthAndSafetyData = {HealthAndSafetyData} />
            <HealthAndSafetyGrid HealthAndSafetyData = {HealthAndSafetyData} />
        </div>
    )
}
export default HealthAndSafety;