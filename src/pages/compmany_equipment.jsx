import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import CompanyEquipmentGrid from "../features/company_equipment/component/company_equipment_grid";
import CompanyEquipmentGridMobile from "../features/company_equipment/component/company_equipment_grid_mobile";
import CompanyEquipmentImage from "../features/company_equipment/component/company_equipment_image";
import { useFetchCompanyEquipment } from "../features/company_equipment/hook/use_fetch_company_equipment";
import MetaHelmet from "../component/meta/metaHelmet";
import Loader from "./../component/loader/loader";
import ErrorMessageNetwork from "./../component/errorMessage/errorMessage";

const CompanyEquipment = () => {
  const {
    data: companyEquipmentData,
    isLoading: companyEquipmentDataLoading,
    error: companyEquipmentDataError,
  } = useFetchCompanyEquipment();
  if (companyEquipmentDataLoading) {
    return <Loader />;
  }
  if (companyEquipmentDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={companyEquipmentData?.data?.meta_title}
          description={companyEquipmentData?.data?.meta_description}
        />
        <CompanyEquipmentImage companyEquipmentData={companyEquipmentData} />
        <div className="lg:block hidden">
          <CompanyEquipmentGrid companyEquipmentData={companyEquipmentData} />
        </div>
        <div className="lg:hidden block">
          <CompanyEquipmentGridMobile
            companyEquipmentData={companyEquipmentData}
          />
        </div>
      </HelmetProvider>
    </div>
  );
};
export default CompanyEquipment;
