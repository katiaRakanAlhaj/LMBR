import Banner from "../../../component/Banner/Banner";
import i18n from "../../../i18n";
const CompanyEquipmentImage = ({companyEquipmentData}) => {
    return (
        <div>
            <Banner image={companyEquipmentData?.data?.banner} title={i18n.t("company_equipment")} />
        </div>
    )
}
export default CompanyEquipmentImage;