import Banner from "../../../../component/Banner/Banner";
import i18n from "../../../../i18n";
const GoladImage = ({goalsData})=> {
    return(
        <div>
            <Banner image={goalsData?.data?.banner} title={i18n.t("goals")}/>
        </div>
    )
}
export default GoladImage;