import DOMPurify from 'dompurify';

const SectionGrid = ({ title, description, image, layout = "grid", reverse = false }) => {
    const isColumn = layout === "column";

    return (
        <div className="container2 mx-auto">
            <div
                className={
                    isColumn
                        ? "flex flex-col gap-6 lg:mt-[5rem] mt-[2rem]"
                        : `grid lg:grid-cols-12 grid-cols-1 gap-y-[1.5rem] gap-x-[4rem] lg:mt-[5rem] mt-[3.5rem] ${reverse ? "flex-row-reverse" : ""}`
                }
            >
                {/* Text */}
                <div
                    className={
                        isColumn
                            ? ""
                            : `lg:col-span-7 col-span-full flex flex-col justify-center ${reverse ? "order-2" : "order-1"}`
                    }
                >
                    <h1 className="text-[#333333] text-[1.3rem] font-bold">{title}</h1>
                    <p 
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description)
                        }} 
                        className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify" 
                    />
                </div>

                {/* Image */}
                <div
                    className={
                        isColumn
                            ? ""
                            : `lg:col-span-5 col-span-1 ${reverse ? "order-1" : "order-2"}`
                    }
                >
                    <img
                        src={image}
                        className={`w-full ${isColumn ? "lg:h-[24rem] h-[20rem]" : "lg:h-[19rem] h-[20rem]"} object-cover rounded-3xl`}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionGrid;