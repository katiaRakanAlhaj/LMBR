import arrow1 from "../../../../assets/images/arrow1.png";
import arrow2 from "../../../../assets/images/arrow2.png";
const AboutSecondSection = () => {
    return (
        <div className="container2 mx-auto mt-[6rem]">
            <div className="grid grid-cols-3 gap-x-[5rem]">
                <p className="text-[1.2rem] text-center text-[#333333] flex items-center">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
                <div>
                    <img src={arrow1} />
                    <h1 className="font-bold text-center mt-[1.5rem] mb-[1.5rem] text-[2.1rem] text-[#333333]">استمتع بأعلى مستويات الجودة في مجال المقاولات</h1>
                    <img src={arrow2} />
                </div>
                <p className="text-[1.2rem] text-center text-[#333333] flex items-center">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>

            </div>
        </div>
    )
}
export default AboutSecondSection;