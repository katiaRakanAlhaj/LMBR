import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import ModelTwoAbout from "../../features/company_pages/Model_two/component/model_two_about";
import ModelTwoBanner from "../../features/company_pages/Model_two/component/model_two_banner";
import ModelTwoBannerMobile from "../../features/company_pages/Model_two/component/model_two_banner_mobile";
import ModelTwoEmployment from "../../features/company_pages/Model_two/component/model_two_employment";
import ModelTwoProjects from "../../features/company_pages/Model_two/component/model_two_project";
import ModelOneUploadFile from "./../../features/company_pages/Model_one/component/model_one_upload_file";
import MetaHelmet from "../../component/meta/metaHelmet";

const ModelTwo = ({ singleCompanyData }) => {
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={singleCompanyData?.name}
          description={singleCompanyData?.name}
        />
        <div className="lg:block hidden">
          <ModelTwoBanner singleCompanyData={singleCompanyData} />
        </div>
        <div className="lg:hidden block">
          <ModelTwoBannerMobile singleCompanyData={singleCompanyData} />
        </div>
        <ModelOneUploadFile singleCompanyData={singleCompanyData} />
        <div className="lg:mt-[-8rem] mt-[5rem]">
          <ModelTwoAbout singleCompanyData={singleCompanyData} />
        </div>
        <ModelTwoEmployment singleCompanyData={singleCompanyData} />
        <ModelTwoProjects singleCompanyData={singleCompanyData} />
      </HelmetProvider>
    </div>
  );
};
export default ModelTwo;
