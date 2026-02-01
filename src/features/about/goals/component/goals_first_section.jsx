import { useState } from "react";
import { RiArrowLeftDownLine, RiArrowLeftUpLine, RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import i18n from "../../../../i18n";

const GoalsFirstSection = ({ goalsData }) => {
    // ضبط الحالة الأولى لتكون العنصر الأول مفتوحاً
    const [openIndex, setOpenIndex] = useState(0);



    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container2 mx-auto lg:mt-[5rem] mt-[4rem]">
            <div className="grid lg:grid-cols-2 gap-[4rem]">
                {/* العمود الأول - الصورة */}
                <div>
                    <img
                        className="w-full lg:h-[28rem] h-[20rem] object-cover rounded-md"
                        src={goalsData?.data?.first_section_image}
                    />
                </div>

                {/* العمود الثاني - عناصر متعددة */}
                <div className="flex flex-col gap-6 justify-center">
                    {goalsData?.data?.first_section_content?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h1 className="text-[1.8rem] font-bold text-secondary mb-[-2rem]">
                                    {item.title}
                                </h1>

                                <button
                                    className="w-[3rem] h-[3rem] bg-[#333333] flex justify-center items-center cursor-pointer hover:bg-secondary transition-colors"
                                    onClick={() => toggleItem(index)}
                                >
                                    <div className="text-white text-[1.5rem]">
                                        {openIndex === index
                                            ? i18n.language === "ar"
                                                ? <RiArrowLeftUpLine />
                                                : <RiArrowRightUpLine />
                                            : i18n.language === "ar"
                                                ? <RiArrowLeftDownLine />
                                                : <RiArrowRightDownLine />
                                        }
                                    </div>
                                </button>
                            </div>

                            {/* Accordion */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div
                                    className="text-[1.2rem] leading-relaxed text-[#333333]"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />

                                {/* Divider */}
                                {index < goalsData.data.first_section_content.length - 1 && (
                                    <div className="w-full h-[1px] mt-4 bg-[#C4C4C4]" />
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