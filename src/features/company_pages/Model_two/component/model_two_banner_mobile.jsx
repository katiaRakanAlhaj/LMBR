import i18n from "../../../../i18n";
import image from "../../../../assets/images/bannermodel3.png";

const ModelTwoBannerMobile = () => {
    return (
        <div>
            {/* Desktop version with SVG */}
            <div className="hidden lg:block relative w-full h-[30rem] overflow-hidden">
                <svg
                    viewBox="0 0 1460 600"
                    preserveAspectRatio="xMidYMid slice"
                    className="w-full h-full"
                >
                    <defs>
                        {/* Clip path for the arch */}
                        <clipPath id="arch-clip">
                            <path d="M0,500 C390,260 1080,260 1440,500 L1440,0 L0,0 Z" />
                        </clipPath>

                        {/* Darker linear gradient */}
                        <linearGradient id="linear-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="12.69%" stopColor="rgba(0,15,47,0.7)" />
                            <stop offset="31.19%" stopColor="rgba(20,110,150,0.1)" />
                        </linearGradient>

                        {/* Darker radial gradient */}
                        <radialGradient
                            id="radial-grad"
                            cx="78.68%"
                            cy="51.21%"
                            r="141.865%"
                        >
                            <stop offset="0%" stopColor="#43515A" />
                            <stop offset="100%" stopColor="#2A3B45" />
                        </radialGradient>
                    </defs>

                    {/* Background rectangle with radial gradient */}
                    <rect
                        width="1440"
                        height="600"
                        fill="url(#radial-grad)"
                        clipPath="url(#arch-clip)"
                    />

                    {/* Overlay linear gradient */}
                    <rect
                        width="1440"
                        height="600"
                        fill="url(#linear-grad)"
                        clipPath="url(#arch-clip)"
                    />
                </svg>

                {/* Flex container for text + image */}
                <div className="absolute top-1/2 lg:left-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 lg:mt-[-5rem] mt-[-2rem] flex w-[90%] z-10">
                    {/* Image (3/4 width) */}
                    <div className=" w-1/2">
                        <img 
                            src={image} 
                            alt="Banner" 
                            className={`w-[full] h-[12rem] object-contain ${i18n.language == "ar" ? 'mr-[-8rem]' : 'ml-[-8rem]'}`} 
                        />
                    </div>
                    {/* Text (1/4 width) */}
                    <div className={`lg:w-1/4 w-1/2 text-white flex flex-col justify-center mt-[-5rem] ${i18n.language == "ar" ? 'lg:mr-[-11rem] mr-[-4rem]' : 'lg:ml-[-11rem] ml-[-4rem]'}`}>
                        <p className="font-bold text-[1.2rem] lg:text-[2.3rem] ">
                            شـركة بناء الرافدين
                        </p>
                        <p className="lg:text-[1.2rem] text-[0.8rem] mt-[1rem] lg:w-[140%]">
                            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                        </p>
                    </div>
                </div>

                {/* Optional Decorative Box */}
                <div
                    className={`absolute ${i18n.language === "en" ? "-right-[8rem]" : "-left-[8rem]"
                        } bottom-[2rem] w-[25rem] h-[25rem]`}
                >
                    {/* <img className="object-contain" src={leftimage} /> */}
                </div>
            </div>

            {/* Mobile version - stacked layout */}
            <div className="lg:hidden block bg-gradient-to-b from-[#43515A] to-[#2A3B45] pt-8 pb-12">
                <div className="container mx-auto px-4">
                    {/* Image Section */}
                    <div className="mb-8">
                        <img 
                            src={image} 
                            alt="Banner" 
                            className="w-full max-h-[25rem] object-contain" 
                        />
                    </div>
                    
                    {/* Text Section */}
                    <div className="text-white text-center px-4">
                        <h2 className="font-bold text-2xl md:text-3xl mb-4">
                            شـركة بناء الرافدين
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelTwoBannerMobile;