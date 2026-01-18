import about from "../../../../assets/images/modelthreeabout.png";
import icon from "../../../../assets/images/modelthreeicon.png"
import ModelThreeTitle from "../../../../component/ui/model_three_title";
const ModelThreeAbout = () => {
    return (
        <div className="container7 mx-auto mt-[8rem]">
            <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem]">
                {/* Image column */}
                <div className="lg:col-span-4 col-span-full">
                    <div className="lg:h-[28rem] h-[20rem] flex justify-center items-center w-full rounded-tr-2xl rounded-b-2xl rounded-tl-[8rem] bg-[linear-gradient(#E5AC62_0%,_#7F5F36_100%)]">
                        <img
                            className="w-full lg:h-[28rem] h-[15rem] object-cover"
                            src={about}
                        />
                    </div>

                </div>
                {/* Content column */}
                <div className="lg:col-span-8 col-span-full flex flex-col justify-center">
                    <ModelThreeTitle title={"حول الشركة"} />
                    <p
                        className="text-[#333333] leading-relaxed mt-3 text-[1.2rem]"
                    >
                        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                    </p>

                </div>
            </div>
        </div>
    )
}
export default ModelThreeAbout;