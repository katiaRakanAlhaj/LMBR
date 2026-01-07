const SectionGrid = ({ title, description, image, layout = "grid", reverse = false }) => {
    const isColumn = layout === "column";

    return (
        <div className="container2 mx-auto">
            <div
                className={
                    isColumn
                        ? "flex flex-col gap-6 mt-[5rem]"
                        : `grid grid-cols-12 gap-x-[4rem] mt-[5rem] ${reverse ? "flex-row-reverse" : ""}`
                }
            >
                {/* Text */}
                <div
                    className={
                        isColumn
                            ? ""
                            : `col-span-7 flex flex-col justify-center ${reverse ? "order-2" : "order-1"}`
                    }
                >
                    <h1 className="text-[#333333] text-[1.3rem] font-bold">{title}</h1>
                    <p className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify">
                        {description}
                    </p>
                </div>

                {/* Image */}
                <div
                    className={
                        isColumn
                            ? ""
                            : `col-span-5 ${reverse ? "order-1" : "order-2"}`
                    }
                >
                    <img
                        src={image}
                        className={`w-full ${isColumn ? "h-[24rem]" : "h-[19rem]"} object-cover rounded-3xl`}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionGrid;
