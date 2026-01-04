import { useRef, useState, useEffect } from "react";
import Title from "../../../component/ui/title";
import service1 from "../../../assets/images/service1.png";
import service2 from "../../../assets/images/service2.png";
import service3 from "../../../assets/images/service3.png";
import service4 from "../../../assets/images/service4.png";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import i18next from "i18next";

const Services = () => {
    const sectionRef = useRef(null);
    const isRTL = i18next.language === "ar";
    const [isVisible, setIsVisible] = useState(false);

    const items = [
        { image: service1, title: 'المقاولات العامة', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service2, title: 'اعمال الطرق والجسور', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service3, title: 'أعمال الكهرباء', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service4, title: 'تصميم وبناء المشاريع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service1, title: 'المقاولات العامة', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service2, title: 'اعمال الطرق والجسور', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service3, title: 'أعمال الكهرباء', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
        { image: service4, title: 'تصميم وبناء المشاريع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' },
    ];

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

    // Hover handlers
    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    // Animation classes for title and description (top to bottom)
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

    // Animation classes for rows (same left/right animation as before)
    const getRowAnimationClass = (rowIndex) => {
        // First row: from right to left (or left to right for LTR)
        if (rowIndex === 0) {
            return `transform transition-all duration-700 ease-out delay-200 ${isVisible
                ? "translate-x-0 opacity-100"
                : isRTL
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                }`;
        }
        // Second row: from left to right (or right to left for LTR)
        else if (rowIndex === 1) {
            return `transform transition-all duration-700 ease-out delay-200 ${isVisible
                ? "translate-x-0 opacity-100"
                : isRTL
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`;
        }
        return "";
    };

    return (
        <div
            ref={sectionRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="overflow-hidden"
        >
            <div className={`mt-[5rem] flex flex-col justify-center text-center items-center ${getTitleAnimationClass()}`}>
                <Title title={"خدماتنا"} />
            </div>

            <div className={getDescriptionAnimationClass()}>
                <p className="text-[#333333] text-[1.2rem] w-[50%] mx-auto text-center mt-4">
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم
                </p>
            </div>

            <div className="mt-[2rem] container2 mx-auto">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={getRowAnimationClass(rowIndex)}
                    >
                        <div className={`grid grid-cols-4 gap-[2rem] ${rowIndex > 0 ? 'mt-[2rem]' : ''}`}>
                            {row.map((item, itemIndex) => (
                                <div className="rounded-3xl"
                                    key={`${rowIndex}-${itemIndex}`}
                                    style={{
                                        boxShadow: '0px 0px 8px 0px #00000040'
                                    }}
                                >
                                    <div
                                        className="w-full h-[21rem] pt-[2rem] px-[1.5rem] flex flex-col relative group/item"
                                    >
                                        {/* الصورة */}
                                        <img
                                            className="w-[4rem] h-[4rem] object-contain"
                                            src={item.image}
                                            alt={item.title}
                                        />

                                        {/* العنوان */}
                                        <h1 className="text-primary font-bold text-[1.4rem] mt-[2rem] transition-colors duration-300 group-hover/item:text-secondary">
                                            {item.title}
                                        </h1>
                                        <p className="text-[0.9rem] text-[#333333] mt-[0.5rem] leading-[1.5rem] line-clamp-3">
                                            {item.description}
                                        </p>

                                        <button
                                            className="w-full text-[1.2rem] h-[3.7rem] group bg-primary absolute bottom-0 right-0 rounded-b-3xl flex items-center justify-center gap-x-2 transition-colors duration-300 hover:bg-secondary"
                                        >
                                            <p className="text-white">
                                                {i18next.t("see_more")}
                                            </p>

                                            {i18next.language === "ar" ? (
                                                <span className="text-white text-[1.4rem] transform transition-transform duration-300 group-hover:-rotate-45">
                                                    <GoArrowUpLeft />
                                                </span>
                                            ) : (
                                                <span className="text-white text-[1.2rem] transform transition-transform duration-300 group-hover:rotate-45">
                                                    <GoArrowUpRight />
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Services;