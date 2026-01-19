import ModelThreeTitle from './../../../../component/ui/model_three_title';
import image1 from "../../../../assets/images/modelthree1.png";
import image2 from "../../../../assets/images/modelthree2.png";

const ModelThreeProjects = () => {
    return (
        <div className="container2 mx-auto lg:mt-[7rem] mt-[3rem]">
            {/* first section */}
            <div>
                <ModelThreeTitle title={"لوريم ايبسوم هو نموذج افتراضي"} />
                <p className='text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]'>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
                <img className='w-full h-[18rem] mt-[1rem] object-cover rounded-xl' src={image1} />
            </div>
            {/* second section */}
            <div className='grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[2rem] mt-[2rem]'>
                <div className='lg:col-span-8 col-span-1'>
                    <ModelThreeTitle title={"لوريم ايبسوم هو نموذج افتراضي"} />
                    <p className='text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]'>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <img className='h-[20rem] rounded-xl object-cover w-full' src={image2} />
                </div>
            </div>
            {/* third section */}
            <div className='mt-[2rem]'>
                <ModelThreeTitle title={"لوريم ايبسوم هو نموذج افتراضي"} />
                <p className='text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]'>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور </p>
            </div>
        </div>
    )
}
export default ModelThreeProjects;