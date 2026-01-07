import about1 from "../../../../assets/images/about1.png";
import about2 from "../../../../assets/images/about2.png";
import about3 from "../../../../assets/images/about3.png";

const AboutThirdSection = () => {
    const items = [
        { image: about1, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
        { image: about2, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
        { image: about3, title: 'لوريم ايبسوم هو نموذج افتراضي يوضع', description: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت ' },
    ]
    return (
        <div className="container2 mx-auto mt-[6rem]">
            <div className="flex justify-center flex-col items-center text-center">
                <h1 className="font-bold text-[2.1rem] text-[#333333]">حلول مقاولات دقيقة تضمن لك راحة البال.</h1>
                <p className="text-[1.2rem] w-[70%] text-[#333333] text-center">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
            </div>
            <div className="grid grid-cols-3 gap-x-[2rem] mt-[2rem]">

                {items?.map((item) => (
                    <div className="flex flex-col items-center space-y-2">
                        <div className="w-[8rem] h-[8rem] mb-2 bg-primary rounded-full flex justify-center items-center">
                            <img className="w-[4rem] h-[4rem] object-contain" src={item.image} />
                        </div>
                        <h1 className="font-bold text-[1.2rem] text-[#333333]">{item.title}</h1>
                        <p className="text-[#333333] text-center text-[0.9rem] w-[80%]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AboutThirdSection;