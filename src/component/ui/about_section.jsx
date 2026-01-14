const AboutSection = ({
  image,
  title,
description,
  barColor = "#000",
  barWidth = "1rem",
  barHeight = "3rem",
  gap = "gap-x-4",
}) => {
  return (
    <div className="container7 mx-auto mt-[-1rem]">
      <div className="grid grid-cols-12 gap-x-[2rem]">
        {/* Image column */}
        <div className="col-span-5">
          <img
            className="w-full h-[28rem] object-cover"
            src={image}
          />
        </div>

        {/* Content column */}
        <div className="col-span-7 flex flex-col justify-center">
          <div className={`flex items-center ${gap}`}>
            <div
              style={{
                width: barWidth,
                height: barHeight,
                backgroundColor: barColor,
              }}
            />
            <p className="font-bold text-[#333333] text-[1.5rem] mt-2">
              {title}
            </p>
          </div>

        
            <p
              className="text-[#333333] leading-relaxed mt-3 text-[1.2rem]"
            >
              {description}
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
