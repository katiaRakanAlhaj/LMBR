import ModelOneAbout from "../../features/company_pages/Model_one/component/model_one_about";
import ModelOneBanner from "../../features/company_pages/Model_one/component/Model_one_banner";
import ModelOneEmployment from "../../features/company_pages/Model_one/component/model_one_employment";
import ModelOneProjects from "../../features/company_pages/Model_one/component/model_one_projects";
import ModelOneUploadFile from "../../features/company_pages/Model_one/component/model_one_upload_file";
const ModelOne = ({singleCompanyData})=> {
    return(
        <div>
            <ModelOneBanner singleCompanyData = {singleCompanyData}/>
            <ModelOneUploadFile singleCompanyData = {singleCompanyData}/>
            <ModelOneAbout singleCompanyData = {singleCompanyData}/>
            <ModelOneEmployment singleCompanyData = {singleCompanyData}/>
            <ModelOneProjects singleCompanyData = {singleCompanyData}/>
        </div>
    )
}
export default ModelOne;