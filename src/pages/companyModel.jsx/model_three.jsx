import ModelThreeAbout from "../../features/company_pages/Model_three/component/model_three_about";
import ModelThreeBanner from "../../features/company_pages/Model_three/component/model_three_banner";
import ModelThreeEmployment from "../../features/company_pages/Model_three/component/model_three_employment";
import ModelThreeProjects from "../../features/company_pages/Model_three/component/model_three_projects";
const ModelThree = ()=> {
    return(
        <div>
            <ModelThreeBanner/>
            <ModelThreeAbout/>
            <ModelThreeEmployment/>
            <ModelThreeProjects/>
        </div>
    )
}
export default ModelThree;