import arrow1 from "../../../../assets/images/arrow1.png";
import arrow2 from "../../../../assets/images/arrow2.png";
import  DOMPurify  from 'dompurify';
const AboutSecondSection = ({aboutData}) => {
    return (
        <div className="container2 mx-auto lg:mt-[6rem] mt-[3rem]">
            <div className="grid lg:grid-cols-3 gap-y-[2rem] gap-x-[5rem]">
                <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(aboutData?.data?.second_section_description_1)
                    }} className="text-[1.2rem] text-center text-[#333333] flex items-center"/>
                <div>
                    <img src={arrow1} />
                    <h1 dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(aboutData?.data?.second_section_description_2)
                    }} className="font-bold text-center lg:mt-[1.5rem] lg:mb-[1.5rem] lg:text-[2.1rem] text-[1.5rem] text-[#333333]"/>
                    <img src={arrow2} />
                </div>
                <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(aboutData?.data?.second_section_description_3)
                    }}  className="text-[1.2rem] text-center text-[#333333] flex items-center"/>

            </div>
        </div>
    )
}
export default AboutSecondSection;