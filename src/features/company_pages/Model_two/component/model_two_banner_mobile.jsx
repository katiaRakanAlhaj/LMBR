import i18n from "../../../../i18n";
import image from "../../../../assets/images/bannermodel3.png";

const ModelTwoBannerMobile = () => {
    return (
        <div>
          

            {/* Mobile version - stacked layout */}
            <div className="lg:hidden block bg-gradient-to-b from-[#43515A] to-[#2A3B45] pt-8 pb-12 h-auto">
                <div className="container mx-auto px-4">
                    {/* Image Section */}
                    <div className="">
                        <img 
                            src={image} 
                            alt="Banner" 
                            className="w-full h-[15rem] object-contain" 
                        />
                    </div>
                    
                    {/* Text Section */}
                    <div className="text-white text-center px-4">
                        <h2 className="font-bold text-xl mb-4">
                            شـركة بناء الرافدين
                        </h2>
                        <p className="text-base text-md leading-relaxed">
                            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelTwoBannerMobile;