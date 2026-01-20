import Banner from "../../../component/Banner/Banner";
const CompanyEquipmentImage = ({companyEquipmentData}) => {
    return (
        <div>
            <Banner image={companyEquipmentData?.data?.banner} title={"معدات الشركة"} />
        </div>
    )
}
export default CompanyEquipmentImage;