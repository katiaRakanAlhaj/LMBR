import goal1 from "../../../../assets/images/goal1.png";
import goal2 from "../../../../assets/images/goal1.png";
import goal3 from "../../../../assets/images/goal1.png";

const GoalsSecondSection = () => {
    const items = [
        { image: goal1, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
        { image: goal2, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
        { image: goal3, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
    ]
    return (
        <div className="container2 mx-auto mt-[7rem]">
            <div className="flex justify-center flex-col items-center text-center">
                <h1 className="font-bold text-[2.1rem] text-[#333333]">نُشيّد أحلامك بحجارة من الإتقان</h1>
                <p className="text-[1.2rem] lg:w-[70%] text-[#333333] text-center">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[2rem] gap-x-[2rem] mt-[2rem]">
                {items?.map((item) => (
                    <div className="flex flex-col items-center space-y-2">
                        <div className="lg:w-[8rem] lg:h-[8rem] md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] mb-2 bg-primary rounded-full flex justify-center items-center">
                            <img className="lg:w-[4rem] md:w-[3rem] w-[2rem] lg:h-[4rem] md:h-[3rem] h-[2rem] object-contain" src={item.image} />
                        </div>
                        <h1 className="font-bold text-[1.2rem] text-[#333333] flex text-center">{item.title}</h1>
                        <p className="text-[#333333] text-center text-[0.9rem] w-[80%]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GoalsSecondSection;
