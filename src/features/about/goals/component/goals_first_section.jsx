import { useState } from "react";
import image from "../../../../assets/images/firstsectiongoalImg.jpg";
import { RiArrowLeftDownLine, RiArrowLeftUpLine } from "react-icons/ri";

const GoalsFirstSection = () => {
    // ضبط الحالة الأولى لتكون العنصر الأول مفتوحاً
    const [openIndex, setOpenIndex] = useState(0);
    
    const items = [
        { 
            num: '95%', 
            desc: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه' 
        },
        { 
            num: '10%', 
            desc: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه' 
        },
        { 
            num: '12%', 
            desc: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه' 
        },
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container2 mx-auto lg:mt-[5rem] mt-[4rem]">
            <div className="grid lg:grid-cols-2 gap-[4rem]">
                {/* العمود الأول - الصورة */}
                <div>
                    <img
                        className="w-full h-[28rem] object-cover rounded-md"
                        src={image}
                        alt="هدف"
                    />
                </div>

                {/* العمود الثاني - عناصر متعددة */}
                <div className="flex flex-col gap-6 justify-center">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            {/* الصف العلوي مع الرقم والأيقونة */}
                            <div className="flex justify-between items-center">
                                <h1 className="text-[4rem] font-bold text-secondary mb-[-2rem]">
                                    {item.num}
                                </h1>

                                {/* زر التبديل */}
                                <button
                                    className="w-[3rem] h-[3rem] bg-[#333333] flex justify-center items-center cursor-pointer hover:bg-secondary transition-colors"
                                    onClick={() => toggleItem(index)}
                                >
                                    <div className="text-white text-[1.5rem]">
                                        {openIndex === index ? <RiArrowLeftUpLine /> : <RiArrowLeftDownLine />}
                                    </div>
                                </button>
                            </div>

                            {/* منطقة Accordion (نص فقط بدون خلفية) */}
                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="text-[1.2rem] leading-relaxed text-[#333333]">
                                    {item.desc}
                                </p>
                                {/* خط فاصل */}
                                {index < items.length - 1 && (
                                    <div className="w-full h-[0.1rem] mt-3 mb-3 bg-[#C4C4C4]"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GoalsFirstSection;