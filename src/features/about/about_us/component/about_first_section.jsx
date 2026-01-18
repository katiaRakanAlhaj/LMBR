import i18next from "i18next";
import Title from "../../../../component/ui/title";
import about from "../../../../assets/images/about.jpg";
const AboutFirstSection = () => {
    return (
        <div className="container2 mx-auto mt-[3.5rem]">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[8rem]">
                {/* first column */}
                <div className={`col-span-8 flex flex-col justify-center`}
                >
                    <Title title={i18next.t("about_us")} />

                    <p className="text-[#333333] text-[1.2rem] mt-[0.8rem] leading-[2rem] text-justify">
                        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                    </p>
                </div>
                {/* second column */}
                <div
                    className={`col-span-4`}
                >
                    <img
                        className="w-full lg:h-[27rem] h-[20rem] object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                        src={about}
                    />
                </div>
            </div>

        </div>
    )
}
export default AboutFirstSection;