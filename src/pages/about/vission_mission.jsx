import VissionAndMissionGrid from "../../features/about/vission_mission/component/vission_mession_grid";
import VissionAndMissionImage from "../../features/about/vission_mission/component/vission_mission_image";
import vission1 from "../../assets/images/vission1.jpg";
import vission2 from "../../assets/images/vission2.jpg";
import { useFetchVission } from "../../features/about/vission_mission/hook/use_fetch_vission";
const VissionAndMission = () => {
    const {data:vissionData , isLoading:vissionDataLoading , error:vissionDataError} = useFetchVission();
    return (
        <div>
            <VissionAndMissionImage vissionData = {vissionData}/>
            <VissionAndMissionGrid image={vissionData?.data?.vision_image} dir = "ltr"  title={vissionData?.data?.vision_title}
                desccription={vissionData?.data?.vision_description} />
            <VissionAndMissionGrid image={vissionData?.data?.mission_image} dir="rtl" title={vissionData?.data?.mission_title} desccription={vissionData?.data?.mission_description}/>
        </div>
    )
}
export default VissionAndMission;