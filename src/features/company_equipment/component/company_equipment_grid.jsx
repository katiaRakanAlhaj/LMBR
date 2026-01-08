const CompanyEquipmentGrid = () => {
    const items = [
        {id:1 , desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2005 - مارسيدس اكتروس'},
        {id:2 , desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2003 - مان'},
        {id:3 , desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2006 - مارسيدس اكتروس'},
        {id:4 ,desc:'حادلة ستيلية - 2002 - بوماك'},
        {id:5 ,desc:'جرافة (شفل) - 1991 - كاوسكي'},
        {id:6 ,desc:'خباطة خرسانة كونكريت - 2004 - مان'},
        {id:7 ,desc:'بمب ضخ كونكريت شوينك طول 36 - 1991 - مارسيدس'},
        {id:8 ,desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2003 - مان'},
        {id:9 ,desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2006 - مارسيدس اكتروس'},
        {id:10 ,desc:'حادلة ستيلية - 2002 - بوماك'},
        {id:11 ,desc:'جرافة (شفل) - 1991 - كاوسكي'},
        {id:12,desc:'خباطة خرسانة كونكريت - 2004 - مان'},
        {id:13,desc:'شاحنة راس قاطورة ومقطورة (نساف) - 2005 - مارسيدس اكتروس'},
        {id:14,desc:'حادلة ستيلية - 2002 - بوماك'},
        {id:15,desc:'جرافة (شفل) - 1991 - كاوسكي'},
        {id:16,desc:'خباطة خرسانة كونكريت - 2004 - مان'}
    ];
    
    return (
        <div>
            <div className="container2 mx-auto mt-[4rem]">
                <p className="text-[#333333] text-center text-[1.1rem] leading-relaxed">
                    لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                </p>
            </div>
            
            <div className="container6 mx-auto mt-[3rem]">
                {/* Dynamically render all items from the array */}
                {items.map((item, index) => (
                    <div key={item.id} className="flex gap-x-[2rem] items-center mb-[2rem]">
                        <div className="w-[6rem] h-[6rem] rounded-full bg-[#C4C4C4] flex justify-center items-center text-white font-bold text-[3rem] pt-[1.2rem]">
                            {index + 1}
                        </div>
                        <div className="w-auto px-[4rem] h-[4.5rem] rounded-full bg-[#C4C4C4] text-white flex justify-center items-center font-bold text-[1.2rem]">
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CompanyEquipmentGrid;