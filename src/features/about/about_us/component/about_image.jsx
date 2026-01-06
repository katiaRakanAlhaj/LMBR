import Banner from './../../../../component/Banner/Banner';
import bgAbout from "../../../../assets/images/bgAbout.jpg";
const AboutImage = ()=> {
    return(
        <div>
            <Banner title={"من نحن"} image={bgAbout}/>
        </div>
    )
}
export default AboutImage;