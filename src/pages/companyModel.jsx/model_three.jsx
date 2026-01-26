import ModelThreeAbout from "../../features/company_pages/Model_three/component/model_three_about";
import ModelThreeBanner from "../../features/company_pages/Model_three/component/model_three_banner";
import ModelThreeEmployment from "../../features/company_pages/Model_three/component/model_three_employment";
import ModelThreeProjects from "../../features/company_pages/Model_three/component/model_three_projects";
const ModelThree = ({singleCompanyData})=> {
    return(
        <div>
            <ModelThreeBanner singleCompanyData = {singleCompanyData}/>
            <ModelThreeAbout singleCompanyData = {singleCompanyData}/>
            <ModelThreeEmployment singleCompanyData = {singleCompanyData}/>
            <ModelThreeProjects singleCompanyData = {singleCompanyData}/>
        </div>
    )
}
export default ModelThree;