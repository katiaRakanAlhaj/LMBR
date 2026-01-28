import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import VissionAndMissionGrid from "../../features/about/vission_mission/component/vission_mession_grid";
import VissionAndMissionImage from "../../features/about/vission_mission/component/vission_mission_image";
import { useFetchVission } from "../../features/about/vission_mission/hook/use_fetch_vission";
import MetaHelmet from "../../component/meta/metaHelmet";
import Loader from "../../component/loader/loader";
import ErrorMessageNetwork from "../../component/errorMessage/errorMessage";
const VissionAndMission = () => {
  const {
    data: vissionData,
    isLoading: vissionDataLoading,
    error: vissionDataError,
  } = useFetchVission();
  if (vissionDataLoading) {
    return <Loader />;
  }
  if (vissionDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={vissionData?.data?.meta_title}
          description={vissionData?.data?.meta_description}
        />
        <VissionAndMissionImage vissionData={vissionData} />
        <VissionAndMissionGrid
          image={vissionData?.data?.vision_image}
          dir="ltr"
          title={vissionData?.data?.vision_title}
          desccription={vissionData?.data?.vision_description}
        />
        <VissionAndMissionGrid
          image={vissionData?.data?.mission_image}
          dir="rtl"
          title={vissionData?.data?.mission_title}
          desccription={vissionData?.data?.mission_description}
        />
      </HelmetProvider>
    </div>
  );
};
export default VissionAndMission;
