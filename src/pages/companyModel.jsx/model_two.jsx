import ModelTwoAbout from "../../features/company_pages/Model_two/component/model_two_about";
import ModelTwoBanner from "../../features/company_pages/Model_two/component/model_two_banner";
import ModelTwoEmployment from "../../features/company_pages/Model_two/component/model_two_employment";
import ModelTwoProjects from "../../features/company_pages/Model_two/component/model_two_project";
import ModelOneUploadFile from './../../features/company_pages/Model_one/component/model_one_upload_file';

const ModelTwo = ()=> {
    return(
        <div>
            <ModelTwoBanner/>
            <ModelOneUploadFile/>
            <div className="mt-[-8rem]">
                <ModelTwoAbout/>
            </div>
            <ModelTwoEmployment/>
            <ModelTwoProjects/>
        </div>
    )
}
export default ModelTwo;