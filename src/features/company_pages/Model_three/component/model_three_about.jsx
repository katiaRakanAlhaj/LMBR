import about from "../../../../assets/images/modelthreeabout.png";
import icon from "../../../../assets/images/modelthreeicon.png"
import ModelThreeTitle from "../../../../component/ui/model_three_title";
const ModelThreeAbout = () => {
    return (
        <div className="container7 mx-auto mt-[-1rem]">
            <div className="grid grid-cols-12 gap-x-[2rem]">
                {/* Image column */}
                <div className="col-span-4">
                    <div className="h-[28rem] flex justify-center rounded-tl-[5rem] items-center w-full bg-[linear-gradient(rgb(226,153,37)_0%,_rgb(124,84,20)_100%)]">
                        <img
                            className="w-full h-[28rem] object-cover"
                            src={about}
                        />
                    </div>

                </div>
                {/* Content column */}
                <div className="col-span-8 flex flex-col justify-center">
                  <ModelThreeTitle title = {"حول الشركة"}/>
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