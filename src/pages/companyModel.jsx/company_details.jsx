import { useParams } from "react-router-dom";
import { useFetchSingleCompany } from "../../features/company_pages/hook/use_fetch_company";
import ModelOne from "./model_one";
import ModelTwo from "./model_two";
import ModelThree from "./model_three";

const CompanyDetails = () => {
  const { id } = useParams();

  const {
    data: singleCompanyData,
    isLoading: singleCompanyDataLoading,
    error: singleCompanyDataError,
  } = useFetchSingleCompany(id);

  // ✅ WAIT for data
  if (singleCompanyDataLoading) {
    return <div>Loading...</div>;
  }

  if (singleCompanyDataError) {
    return <div>Error loading company</div>;
  }

  if (!singleCompanyData) {
    return null;
  }

  const { company_model_id } = singleCompanyData;

  switch (company_model_id) {
    case 1:
      return <ModelOne singleCompanyData={singleCompanyData} />;

    case 2:
      return <ModelTwo singleCompanyData={singleCompanyData} />;

    case 3:
      return <ModelThree singleCompanyData={singleCompanyData} />;

    default:
      return <div>Unknown company model</div>;
  }
};

export default CompanyDetails;