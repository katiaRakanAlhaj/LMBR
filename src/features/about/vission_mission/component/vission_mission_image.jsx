import Banner from "../../../../component/Banner/Banner";
import i18n from "../../../../i18n";
const VissionAndMissionImage = ({vissionData})=> {
    return(
        <div>
            <Banner image={vissionData?.data?.banner} title={i18n.t("vission_and_mission")}/>
        </div>
    )
}
export default VissionAndMissionImage;