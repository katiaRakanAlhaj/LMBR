import ModelThreeAbout from "../../features/company_pages/Model_three/component/model_three_about";
import ModelThreeEmployment from "../../features/company_pages/Model_three/component/model_three_employment";
import ModelThreeProjects from "../../features/company_pages/Model_three/component/model_three_projects";
import ModelOneBanner from './../../features/company_pages/Model_one/component/Model_one_banner';

const ModelThree = ()=> {
    return(
        <div>
            <ModelOneBanner/>
            <ModelThreeAbout/>
            <ModelThreeEmployment/>
            <ModelThreeProjects/>
        </div>
    )
}
export default ModelThree;