import equip1 from "../../../assets/images/equip1.png";
import equip2 from "../../../assets/images/equip2.png";
import DOMPurify from 'dompurify';

const CompanyEquipmentGridMobile = ({ companyEquipmentData }) => {
    return (
        <div className="relative overflow-x-hidden">
            {/* Description */}
            <div className="container2 mx-auto mt-[4rem]">
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(companyEquipmentData?.data?.description)
                }} className="text-[#333333] text-center text-[1.1rem] leading-relaxed" />
            </div>

            {/* Equipment Grid */}
            <div className="container mx-auto mt-[3rem]">
                {companyEquipmentData?.data?.the_equipment?.map((item, index) => {
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
                                {item.the_equipment}
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