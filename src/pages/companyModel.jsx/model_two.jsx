import ModelOneBanner from "../../features/company_pages/Model_one/component/Model_one_banner";
import ModelTwoAbout from "../../features/company_pages/Model_two/component/model_two_about";
import ModelTwoEmployment from "../../features/company_pages/Model_two/component/model_two_employment";
import ModelTwoProjects from "../../features/company_pages/Model_two/component/model_two_project";
import ModelOneUploadFile from './../../features/company_pages/Model_one/component/model_one_upload_file';

const ModelTwo = ()=> {
    return(
        <div>
            <ModelOneBanner/>
            <ModelOneUploadFile/>
            <ModelTwoAbout/>
            <ModelTwoEmployment/>
            <ModelTwoProjects/>
        </div>
    )
}
export default ModelTwo;