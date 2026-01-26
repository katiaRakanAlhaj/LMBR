import i18next from "i18next";
import Title from "../../../../component/ui/title";
import  DOMPurify  from 'dompurify';
const AboutFirstSection = ({ aboutData }) => {
    return (
        <div className="container2 mx-auto mt-[3.5rem]">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[8rem]">
                {/* first column */}
                <div className={`lg:col-span-8 col-span-full flex flex-col justify-center`}
                >
                    <Title title={i18next.t("about_us")} />

                    <p ouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(aboutData?.data?.description)
                    }} className="text-[#333333] text-[1.2rem] mt-[0.8rem] leading-[2rem] text-justify" />

                </div>
                {/* second column */}
                <div
                    className={`lg:col-span-4 col-span-full`}
                >
                    <img
                        className="w-full lg:h-[27rem] h-[20rem] object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                        src={aboutData?.data?.banner}
                    />
                </div>
            </div>

        </div>
    )
}
export default AboutFirstSection;