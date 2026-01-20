import Banner from "../../../component/Banner/Banner";
import i18n from "../../../i18n";
const CertificateImage = ({certificatesData})=> {
    return(
        <div>
            <Banner title={i18n.t("certificates")} image={certificatesData?.data?.banner}/>
        </div>
    )
}
export default CertificateImage;