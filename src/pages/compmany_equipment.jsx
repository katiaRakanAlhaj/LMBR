import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import CompanyEquipmentGrid from "../features/company_equipment/component/company_equipment_grid";
import CompanyEquipmentGridMobile from "../features/company_equipment/component/company_equipment_grid_mobile";
import CompanyEquipmentImage from "../features/company_equipment/component/company_equipment_image";
import { useFetchCompanyEquipment } from "../features/company_equipment/hook/use_fetch_company_equipment";

const CompanyEquipment = ()=> {
    const {data:companyEquipmentData , isLoading:companyEquipmentDataLoading , error:companyEquipmentDataError} = useFetchCompanyEquipment();
    return(
        <div>
            <ScrollToTop/>
            <CompanyEquipmentImage companyEquipmentData = {companyEquipmentData}/>
            <div className="lg:block hidden">
                <CompanyEquipmentGrid companyEquipmentData = {companyEquipmentData}/>
            </div>
            <div className="lg:hidden block">
                <CompanyEquipmentGridMobile companyEquipmentData = {companyEquipmentData}/>
            </div>
        </div>
    )
}
export default CompanyEquipment;