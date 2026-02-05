import DOMPurify from 'dompurify';
const AboutThirdSection = ({ aboutData, solutionData }) => {
    return (
        <div className="container2 mx-auto lg:mt-[6rem] mt-[3rem]">
            <div className="flex justify-center flex-col items-center text-center">
                <h1 className="font-bold lg:text-[2.1rem] text-[1.5rem] text-[#333333]">{aboutData?.data?.third_section_title}</h1>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(aboutData?.data?.third_section_description)
                }} className="text-[1.2rem] lg:w-[70%] text-[#333333] text-center" />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[2rem] gap-x-[2rem] mt-[2rem]">

                {solutionData?.data?.map((solutionData) => (
                    <div className="flex flex-col items-center space-y-2">
                        <div className="lg:w-[8rem] lg:h-[8rem] md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] mb-2 bg-primary rounded-full flex justify-center items-center">
                            <img className="lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] object-contain" src={solutionData.image} />
                        </div>
                        <h1 className="font-bold text-[1.4rem] text-[#333333] flex text-center">{solutionData.title}</h1>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(solutionData.description)
                        }} className="text-[#333333] text-center text-[1.2rem] w-[80%]" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AboutThirdSection;