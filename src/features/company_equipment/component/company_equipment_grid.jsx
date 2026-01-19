import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import equip1 from "../../../assets/images/equip1.png";
import equip2 from "../../../assets/images/equip2.png";

const CompanyEquipmentGrid = () => {
    const items = [
        { id: 1, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2005 - مارسيدس اكتروس' },
        { id: 2, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2003 - مان' },
        { id: 3, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2006 - مارسيدس اكتروس' },
        { id: 4, desc: 'حادلة ستيلية - 2002 - بوماك' },
        { id: 5, desc: 'جرافة (شفل) - 1991 - كاوسكي' },
        { id: 6, desc: 'خباطة خرسانة كونكريت - 2004 - مان' },
        { id: 7, desc: 'بمب ضخ كونكريت شوينك طول 36 - 1991 - مارسيدس' },
        { id: 8, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2003 - مان' },
        { id: 9, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2006 - مارسيدس اكتروس' },
        { id: 10, desc: 'حادلة ستيلية - 2002 - بوماك' },
        { id: 11, desc: 'جرافة (شفل) - 1991 - كاوسكي' },
        { id: 12, desc: 'خباطة خرسانة كونكريت - 2004 - مان' },
        { id: 13, desc: 'شاحنة راس قاطورة ومقطورة (نساف) - 2005 - مارسيدس اكتروس' },
        { id: 14, desc: 'حادلة ستيلية - 2002 - بوماك' },
        { id: 15, desc: 'جرافة (شفل) - 1991 - كاوسكي' },
        { id: 16, desc: 'خباطة خرسانة كونكريت - 2004 - مان' }
    ];

    return (
        <div className="relative overflow-x-hidden"> {/* Added relative, min-h-screen, and padding-bottom */}
            {/* Description */}
            <div className="container2 mx-auto mt-[4rem]">
                <p className="text-[#333333] text-center text-[1.1rem] leading-relaxed">
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                </p>
            </div>

            {/* Equipment Grid */}
            <div className="container6 mx-auto mt-[3rem] pb-16"> {/* Added padding-bottom */}
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <ScrollAnimatedItem
                            key={item.id}
                            item={item}
                            index={index}
                            isEven={isEven}
                        />
                    );
                })}
            </div>

            {/* Absolute positioned circle - now visible */}
            <div className='absolute lg:block hidden w-[8rem] h-[8rem] rounded-full bg-secondary top-1/2 translate-y-1/2 right-0 z-10'>
            </div>
            <div className='absolute lg:block hidden top-1/2 mt-[-11rem] right-[-32rem]  z-10 overflow-x-hidden'>
                <img className='h-[30rem] w-[40rem] object-contain overflow-x-hidden' src={equip1} />

            </div>
            <div className='absolute  lg:block hidden w-[8rem] h-[8rem] rounded-full bg-secondary top-1/2 translate-y-1/2 left-0 z-10'></div>
            <div className='absolute lg:block hidden top-1/2 mt-[2rem] left-[-10rem]  z-10 overflow-x-hidden overflow-y-hidden'>
                <img className='h-[10rem] w-[20rem] object-contain overflow-x-hidden -rotate-45' src={equip2} />

            </div>
        </div>
    );
};

const ScrollAnimatedItem = ({ item, index, isEven }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.3,
        margin: "0px 0px -50px 0px"
    });

    const isFirst = index === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? 400 : -400 }}
            animate={isInView ?
                { opacity: 1, x: 0 } :
                { opacity: 0, x: isEven ? 400 : -400 }
            }
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.8,
                delay: 0.1
            }}
            className={`group flex gap-x-[2rem] justify-center items-center mb-[2rem] ${isEven ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* Number Circle */}
            <div className={`w-[6rem] h-[6rem] rounded-full flex justify-center items-center text-white font-bold text-[3rem] pt-[1.2rem] cursor-pointer ${isFirst ? "bg-primary" : "bg-[#C4C4C4] group-hover:bg-primary transition-colors duration-300"
                }`}>
                {index + 1}
            </div>

            {/* Description */}
            <div className={`w-auto px-[4rem] h-[4.5rem] rounded-full text-white flex justify-center items-center font-bold text-[1.2rem] cursor-pointer ${isFirst ? "bg-secondary" : "bg-[#C4C4C4] group-hover:bg-secondary transition-colors duration-300"
                }`}>
                {item.desc}
            </div>
        </motion.div>
    );
};

export default CompanyEquipmentGrid;