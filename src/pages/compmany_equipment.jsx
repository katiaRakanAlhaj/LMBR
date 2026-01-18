import CompanyEquipmentGrid from "../features/company_equipment/component/company_equipment_grid";
import CompanyEquipmentGridMobile from "../features/company_equipment/component/company_equipment_grid_mobile";
import CompanyEquipmentImage from "../features/company_equipment/component/company_equipment_image";

const CompanyEquipment = ()=> {
    return(
        <div>
            <CompanyEquipmentImage/>
            <div className="lg:block hidden">
                <CompanyEquipmentGrid/>
            </div>
            <div className="lg:hidden block">
                <CompanyEquipmentGridMobile/>
            </div>
        </div>
    )
}
export default CompanyEquipment;