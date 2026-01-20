import Banner from "../../../component/Banner/Banner";
import i18n from "../../../i18n";
const HealthAndSafetyImage = ({HealthAndSafetyData})=> {
    return(
        <div>
            <Banner image={HealthAndSafetyData?.data?.banner} title={i18n.t("health_and_safety")}/>
        </div>
    )
}
export default HealthAndSafetyImage;