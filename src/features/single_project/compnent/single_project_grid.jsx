import singleProject1 from "../../../assets/images/singleproject1.jpg";
import singleProject2 from "../../../assets/images/singleproject2.png";
import singleProject3 from "../../../assets/images/singleproject3.png";
import Title from './../../../component/ui/title';
import { useTranslation } from 'react-i18next';
const SingleProjectGrid = () => {
    const items = [
        { img: singleProject2, title: 'لوريم ابسيوم', date: '02/12/2025', desc: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصو صلوريم ايبسوم هو نموذج افتراضي يوضع ...' },
        { img: singleProject3, title: 'لوريم ابسيوم', date: '02/12/2025', desc: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصو صلوريم ايبسوم هو نموذج افتراضي يوضع ...' },
    ]
    const { t } = useTranslation();
    return (
        <div className="container2 mx-auto">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] mt-[3.5rem] gap-[2.5rem]">
                {/* first column*/}
                <div className="lg:col-span-8 col-span-1">
                    {/* first section */}
                    <div>
                        <h1 className="text-[#333333] text-[1.3rem] font-bold">لوريم ايبسوم هو نموذج افتراضي</h1>
                        <p className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify">
                            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                        </p>
                        <img className="w-full h-[20rem] mt-[1rem] object-cover rounded-3xl" src={singleProject1} />
                    </div>
                    {/* second section */}
                    <div className="grid lg:grid-cols-2 gap-y-[1.5rem] grid-cols-1 mt-[2rem] gap-x-[2rem]">
                        <div>
                            <h1 className="text-[#333333] text-[1.3rem] font-bold">لوريم ايبسوم هو نموذج افتراضي</h1>
                            <p className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify">
                                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                            </p>
                        </div>
                        <div>
                            <img src={singleProject2} className="w-full h-[20rem] object-cover rounded-3xl" />
                        </div>
                    </div>
                    {/* third section*/}
                    <div className="mt-[2rem]">
                        <h1 className="text-[#333333] text-[1.3rem] font-bold">لوريم ايبسوم هو نموذج افتراضي</h1>
                        <p className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify">
                            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
                        </p>
                    </div>
                </div>
                {/* second column*/}
                {/* second column - sidebar */}
                <div className="lg:col-span-4 col-span-1 flex flex-col space-y-4">
                    <div className="flex justify-center items-center">
                        <Title title={t("Other projects")} />
                    </div>
                    {items?.map((item) => (
                        <div className="mt-[1rem]" key={item.title}>
                            <img className="w-full h-[16rem] object-cover rounded-2xl" src={item.img} />
                            <div className="flex justify-between mt-2">
                                <h1 className="text-[1.2rem] font-bold text-[#333333]">{item.title}</h1>
                                <p className="text-[1rem] text-[#333333]">{item.date}</p>
                            </div>
                            <p className="text-[0.9rem] line-clamp-2 text-[#333333]">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default SingleProjectGrid;