import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import ModelThreeAbout from "../../features/company_pages/Model_three/component/model_three_about";
import ModelThreeBanner from "../../features/company_pages/Model_three/component/model_three_banner";
import ModelThreeEmployment from "../../features/company_pages/Model_three/component/model_three_employment";
import ModelThreeProjects from "../../features/company_pages/Model_three/component/model_three_projects";
import MetaHelmet from "../../component/meta/metaHelmet";
const ModelThree = ({ singleCompanyData }) => {
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={singleCompanyData?.name}
          description={singleCompanyData?.name}
        />
        <ModelThreeBanner singleCompanyData={singleCompanyData} />
        <ModelThreeAbout singleCompanyData={singleCompanyData} />
        <ModelThreeEmployment singleCompanyData={singleCompanyData} />
        <ModelThreeProjects singleCompanyData={singleCompanyData} />
      </HelmetProvider>
    </div>
  );
};
export default ModelThree;
