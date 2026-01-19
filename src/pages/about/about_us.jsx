import AboutFirstSection from "../../features/about/about_us/component/about_first_section";
import AboutFourthSection from "../../features/about/about_us/component/about_fourth_section";
import AboutImage from "../../features/about/about_us/component/about_image";
import AboutSecondSection from "../../features/about/about_us/component/about_second_section";
import AboutThirdSection from "../../features/about/about_us/component/about_third_section";
import { useFetchAboutUs } from "../../features/about/about_us/hook/use_fetch_about_us";
import { useFetchSolutions } from "../../features/about/about_us/hook/use_fetch_solution";

const AboutUs = ()=> {
    const {data:aboutData , isLoading:aboutDataLoading , error:aboutDataError} = useFetchAboutUs();
    const {data:solutionData , isLoading:solutionDataLoading , error:solutionDataError} = useFetchSolutions();
    return(
        <div>
            <AboutImage aboutData = {aboutData}/> 
            <AboutFirstSection aboutData = {aboutData}/>
            <AboutSecondSection aboutData = {aboutData}/>
            <AboutThirdSection aboutData = {aboutData} solutionData = {solutionData}/>
            <AboutFourthSection aboutData = {aboutData}/>
        </div>
    )
}
export default AboutUs;