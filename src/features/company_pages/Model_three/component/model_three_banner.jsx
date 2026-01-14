import image from "../../../../assets/images/bgmodel3.png";
import imagemodel3 from "../../../../assets/images/imagemodel3.png";
import rectangle41 from "../../../../assets/images/Rectangle 41.png";
import i18n from "../../../../i18n";

const ModelThreeBanner = () => {
    return (
        <div className="relative">
            <div className="w-full h-[45rem] relative">
                {/* Orange background extending 20rem more */}
                <div
                    className="absolute w-full bg-[#E5AC62] -z-30"
                    style={{
                        height: "calc(100% + 2rem)",
                        clipPath: "ellipse(100% 100% at 50% 0%)",
                        top: 0,
                        left: 0,
                    }}
                ></div>

                {/* Background Image with Clip Path (arch from bottom) */}
                <div
                    className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom",
                        clipPath: "ellipse(100% 100% at 50% 0%)",
                    }}
                />

                {/* Rectangle 41.png image - at original height */}
                <div
                    className="absolute w-full h-full overflow-hidden -z-20"
                    style={{
                        height: "90%",
                        clipPath: "ellipse(100% 100% at 50% 0%)",
                        top: 0,
                        left: 0,
                    }}
                >
                    <img
                        src={rectangle41}
                        alt="Rectangle 41"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className={`absolute w-[25rem] -bottom-[1rem] object-cover ${i18n.language == "ar" ? 'right-[10rem]' : 'left-[10rem]'}`}>
                    <img src={imagemodel3} alt="Model 3" />
                </div>
                <div className={`absolute ${i18n.language == "ar" ? 'right-1/2' : 'left-1/2'} mt-[-2.5rem] top-1/2`}>
                    <h1 className="font-[700] text-white lg:text-[2.3rem] text-[1.8rem]">
                        شــركة المناخل الذهبية
                    </h1>
                    <p className="text-[1.2rem] mt-3 text-white w-[70%]">
                        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModelThreeBanner;