import { useRef, useState, useEffect } from "react";
import about from "../../../assets/images/about.jpg";
import Title from "../../../component/ui/title";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import i18next from "i18next";
import Button from "../../../component/ui/buuton";

const About = () => {
    const sectionRef = useRef(null);
    const isRTL = i18next.language === "ar";
    const [firstColVisible, setFirstColVisible] = useState(false);
    const [secondColVisible, setSecondColVisible] = useState(false);

    // Intersection Observer (show on scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setFirstColVisible(true), 100);
                    setTimeout(() => setSecondColVisible(true), 300);
                } else {
                    setFirstColVisible(false);
                    setSecondColVisible(false);
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
        setFirstColVisible(true);
        setSecondColVisible(true);
    };

    const handleMouseLeave = () => {
        setFirstColVisible(false);
        setSecondColVisible(false);
    };

    return (
        <div
            ref={sectionRef}
            className="container2 mx-auto mt-[3rem] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-[8rem] lg:gap-y-0 gap-y-[2rem]">

                {/* First Column */}
                <div
                    className={`lg:col-span-8 col-span-full transform transition-all duration-700 ease-out ${firstColVisible
                        ? isRTL
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-0 opacity-100"
                        : isRTL
                            ? "translate-x-full opacity-0"
                            : "-translate-x-full opacity-0"
                        }`}
                    onMouseLeave={handleMouseLeave}
                >
                    <Title title={"حول المجموعة"} />

                    <p className="text-[#333333] text-[1.2rem] mt-[0.8rem] leading-[2rem] text-justify">
                        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواءلوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                    </p>

                   <Button title={i18next.t("see_more")}/>
                </div>

                {/* Second Column */}
                <div
                    className={`lg:col-span-4 col-span-full transform transition-all duration-700 ease-out delay-100 ${secondColVisible
                        ? isRTL
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-0 opacity-100"
                        : isRTL
                            ? "-translate-x-full opacity-0"
                            : "translate-x-full opacity-0"
                        }`}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className="w-full lg:h-[27rem] h-[20rem] object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                        src={about}
                        alt="about"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
