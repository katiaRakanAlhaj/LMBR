import equip1 from "../../../assets/images/equip1.png";
import equip2 from "../../../assets/images/equip2.png";

const CompanyEquipmentGridMobile = () => {
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
        <div className="relative overflow-x-hidden">
            {/* Description */}
            <div className="container2 mx-auto mt-[4rem]">
                <p className="text-[#333333] text-center text-[1.1rem] leading-relaxed">
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                </p>
            </div>

            {/* Equipment Grid */}
            <div className="container mx-auto mt-[3rem]">
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isFirst = index === 0;
                    
                    return (
                        <div
                            key={item.id}
                            className={`flex flex-col gap-x-[2rem] justify-center items-center mb-[2rem] ${isEven ? "flex-row" : "flex-row-reverse"}`}
                        >
                            {/* Number Circle */}
                           
                            {/* Description */}
                            <div className={`w-auto px-[1rem] h-auto py-4 rounded-full text-white flex justify-center items-center font-bold text-[0.8rem] ${isFirst ? "bg-secondary" : "bg-[#C4C4C4]"}`}>
                                {item.desc}
                            </div>
                        </div>
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
            <div className='absolute lg:block hidden top-1/2 mt-[2rem] left-[-10rem]  z-10 overflow-x-hidden'>
                <img className='h-[10rem] w-[20rem] object-contain overflow-x-hidden -rotate-45' src={equip2} />
            </div>
        </div>
    );
};

export default CompanyEquipmentGridMobile;