import HealthAndSafetyGrid from "../features/health_and_safety/component/health_and_safety_grid";
import { useFetchHealth } from "../features/health_and_safety/hook/use_fetch_health";
import HealthAndSafetyImage from "./../features/health_and_safety/component/health_and_safety_image";
import ScrollToTop from "./../component/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelmet";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";
const HealthAndSafety = () => {
  const {
    data: HealthAndSafetyData,
    isLoading: HealthAndSafetyDataLoading,
    error: HealthAndSafetyDataError,
  } = useFetchHealth();
  if (HealthAndSafetyDataLoading) {
    return <Loader />;
  }
  if (HealthAndSafetyDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={HealthAndSafetyData?.data?.meta_title}
          description={HealthAndSafetyData?.data?.meta_description}
        />
        <HealthAndSafetyImage HealthAndSafetyData={HealthAndSafetyData} />
        <HealthAndSafetyGrid HealthAndSafetyData={HealthAndSafetyData} />
      </HelmetProvider>
    </div>
  );
};
export default HealthAndSafety;
