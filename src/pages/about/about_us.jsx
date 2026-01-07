import AboutFirstSection from "../../features/about/about_us/component/about_first_section";
import AboutFourthSection from "../../features/about/about_us/component/about_fourth_section";
import AboutImage from "../../features/about/about_us/component/about_image";
import AboutSecondSection from "../../features/about/about_us/component/about_second_section";
import AboutThirdSection from "../../features/about/about_us/component/about_third_section";

const AboutUs = ()=> {
    return(
        <div>
            <AboutImage/> 
            <AboutFirstSection/>
            <AboutSecondSection/>
            <AboutThirdSection/>
            <AboutFourthSection/>
        </div>
    )
}
export default AboutUs;