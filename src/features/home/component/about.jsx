import about from "../../../assets/images/about.jpg";
import Title from "../../../component/ui/title";
const About = () => {
    return (
        <div className="container2 mx-auto mt-[3rem]">
            <div className="grid grid-cols-12 gap-x-[8rem]">
                {/* first column */}
                <div className="col-span-8">
                    <Title title={"حول المجموعة"} />
                    <p className="text-[#333333] text-[1.2rem] mt-[0.8rem] leading-[2rem] flex text-justify">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على </p>
                </div>
                {/* second column */}
                <div className="col-span-4">
                    <img className="w-full h-[28.5rem] object-cover rounded-2xl" src={about} />
                </div>
            </div>
        </div>
    )
}
export default About;