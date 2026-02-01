import  DOMPurify  from 'dompurify';
const AboutFourthSection = ({ aboutData }) => {
    return (
        <div className="lg:mt-[6rem] mt-[3rem] container2 mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-y-[6rem] gap-x-[2rem]">
                {/* first column */}
                <div>
                    <div className="relative">
                        <img src={aboutData?.data?.forth_section_image} className="w-full lg:h-[22rem] h-[20rem] object-cover rounded-3xl" />
                        <div style={{ boxShadow: '0px 4px 12px 0px #00000040' }} className="absolute -bottom-[3.5rem] w-[75%] h-auto py-4 rounded-2xl bg-white left-[5rem] flex justify-center items-center text-center px-[2rem]">
                            <p dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(aboutData?.data?.forth_section_image_description)
                            }} className="font-bold leading-[2rem] lg:text-[1.2rem] text-[1rem] text-secondary" />
                        </div>
                    </div>
                </div>
                {/* second column */}
                <div className="flex flex-col justify-center">
                    <h1 className="lg:text-[1.5rem] text-[1.5rem] font-bold text-[#333333]">{aboutData?.data?.forth_section_title}</h1>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(aboutData?.data?.forth_section_description)
                    }} className="text-[1.2rem] mt-3 text-[#333333] leading-[2rem]" />
                </div>
            </div>
        </div>
    )
}
export default AboutFourthSection;