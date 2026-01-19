import { useRef, useState, useEffect } from "react";
import Title from "../../../component/ui/title";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import i18next from "i18next";
import colorimg1 from "../../../assets/images/colorImg1.png";
import colorimg2 from "../../../assets/images/colorImg2.png";
import colorimg3 from "../../../assets/images/colorImg3.png";
import colorimg4 from "../../../assets/images/colorImg4.png";
import DOMPurify from 'dompurify';
const Services = ({homePageData, servicesData}) => {
    const sectionRef = useRef(null);
    const isRTL = i18next.language === "ar";
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // استخدام بيانات API إذا كانت متاحة، وإلا استخدام البيانات الثابتة كبديل
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (servicesData?.data && servicesData.data.length > 0) {
            // تحويل بيانات API إلى التنسيق المطلوب مع إضافة الصور الملونة
            const apiItems = servicesData.data.map((service, index) => {
                // اختيار صورة ملونة بناءً على الفهرس
                const getColorImage = (index) => {
                    const colorImages = [colorimg1, colorimg2, colorimg3, colorimg4];
                    return colorImages[index % colorImages.length];
                };

                return {
                    id: service.id,
                    image: service.icon, // استخدام الأيقونة من API
                    image2: getColorImage(index), // الصورة الملونة (ثابتة)
                    title: service.title || '',
                    description: service.description || '',
                    rawDescription: service.description // حفظ الوصف الأصلي للاستخدام
                };
            });
            setItems(apiItems);
        } else {
          setItems([])
        }
    }, [servicesData]);

    // Split items into rows (4 items per row)
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
        rows.push(items.slice(i, i + 4));
    }

    // Intersection Observer (show on scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Handlers for hover on cards
    const handleMouseEnter = (rowIndex, itemIndex) => {
        const globalIndex = (rowIndex * 4) + itemIndex;
        setHoveredIndex(globalIndex);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    // Handlers for hover on section
    const handleSectionMouseEnter = () => {
        setIsVisible(true);
    };

    const handleSectionMouseLeave = () => {
        setIsVisible(false);
    };

    // Animation classes for title and description
    const getTitleAnimationClass = () => {
        return `transform transition-all duration-700 ease-out delay-200 ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
            }`;
    };

    const getDescriptionAnimationClass = () => {
        return `transform transition-all duration-700 ease-out delay-200 ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
            }`;
    };

    // Animation classes for rows - مع تأثير عكسي عند مغادرة القسم
    const getRowAnimationClass = (rowIndex) => {
        if (rowIndex === 0) {
            return `transform transition-all duration-700 ease-out delay-200 ${isVisible
                ? "translate-x-0 opacity-100"
                : isRTL
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                }`;
        } else if (rowIndex === 1) {
            return `transform transition-all duration-700 ease-out delay-200 ${isVisible
                ? "translate-x-0 opacity-100"
                : isRTL
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`;
        }
        return "";
    };

    // دالة للحصول على لون الزر بناءً على حالة التمرير
    const getButtonColor = (isHovered) => {
        return isHovered ? "bg-secondary" : "bg-primary";
    };

    // دالة لاستخراج النص العادي من HTML
    const extractTextFromHTML = (htmlString) => {
        if (!htmlString) return '';
        // إزالة الوسوم HTML والحصول على النص فقط
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    return (
        <div
            ref={sectionRef}
            className="overflow-hidden py-[5rem]"
            onMouseEnter={handleSectionMouseEnter}
            onMouseLeave={handleSectionMouseLeave}
        >
            <div className={`flex flex-col justify-center text-center items-center ${getTitleAnimationClass()}`}>
                <Title title={"خدماتنا"} />
            </div>

            <div className={getDescriptionAnimationClass()}>
                <p 
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(homePageData?.data?.services_description || 'وصف الخدمات')
                    }} 
                    className="text-[#333333] text-[1.2rem] lg:w-[50%] mx-auto text-center mt-4"
                />
            </div>
            
            <div className="mt-[3rem] container2 mx-auto">
                {
                    rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={getRowAnimationClass(rowIndex)}
                        >
                            <div className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] ${rowIndex > 0 ? 'mt-[2rem]' : ''}`}>
                                {row.map((item, itemIndex) => {
                                    const globalIndex = (rowIndex * 4) + itemIndex;
                                    const isHovered = hoveredIndex === globalIndex;
                                    const descriptionText = extractTextFromHTML(item.description);

                                    return (
                                        <div
                                            className="rounded-3xl group/card cursor-pointer"
                                            key={`${item.id}-${rowIndex}-${itemIndex}`}
                                            style={{
                                                boxShadow: '0px 0px 8px 0px #00000040'
                                            }}
                                            onMouseEnter={() => handleMouseEnter(rowIndex, itemIndex)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div
                                                className="w-full h-[21rem] pt-[2rem] px-[1.5rem] flex flex-col relative"
                                            >
                                                {/* الصورة مع تأثير الانتقال */}
                                                <div className="relative w-[4rem] h-[4rem]">
                                                    {/* الصورة الأساسية من API */}
                                                    {item.image && (
                                                        <img
                                                            className={`w-full h-full object-contain absolute top-0 left-0 transition-all duration-300 ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                                                            src={item.image}
                                                           
                                                        />
                                                    )}

                                                    {/* الصورة الثانية (الملونة) */}
                                                    <img
                                                        className={`w-full h-full object-contain absolute top-0 left-0 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                                        src={item.image2}
                                                    />
                                                </div>

                                                {/* العنوان */}
                                                <h1 className={`text-primary font-bold text-[1.4rem] mt-[2rem] transition-colors duration-300 ${isHovered ? 'text-secondary' : ''}`}>
                                                    {item.title}
                                                </h1>
                                                
                                                {/* الوصف - استخدام النص المستخرج من HTML */}
                                                <p className="text-[0.9rem] text-[#333333] mt-[0.5rem] leading-[1.5rem] line-clamp-3">
                                                    {descriptionText}
                                                </p>

                                                {/* الزر مع تغيير اللون عند التمرير على الكارد */}
                                                <button
                                                    className={`w-full text-[1.2rem] h-[3.7rem] group/btn absolute bottom-0 right-0 rounded-b-3xl flex items-center justify-center gap-x-2 transition-all duration-300 ${getButtonColor(isHovered)}`}
                                                >
                                                    <p className="text-white">
                                                        {i18next.t("see_more")}
                                                    </p>

                                                    {i18next.language === "ar" ? (
                                                        <span className="text-white text-[1.4rem] transform transition-transform duration-300 group-hover/btn:-rotate-45">
                                                            <GoArrowUpLeft />
                                                        </span>
                                                    ) : (
                                                        <span className="text-white text-[1.2rem] transform transition-transform duration-300 group-hover/btn:rotate-45">
                                                            <GoArrowUpRight />
                                                        </span>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;