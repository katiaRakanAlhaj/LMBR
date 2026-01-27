import Banner from "../../../component/Banner/Banner";
import i18n from "../../../i18n";
const ContactImage = ({contactData})=> {
    return(
        <div>
            <Banner image={contactData?.data?.banner} title={i18n.t("contact_us")}/>
        </div>
    )
}
export default ContactImage;