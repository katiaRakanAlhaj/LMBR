import DOMPurify from "dompurify";
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
    <div className="container7 mx-auto lg:mt-[-1rem] mt-[-2rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem]">
        {/* Image column */}
        <div className="lg:col-span-5 col-span-1">
          <img
            className="w-full lg:h-[28rem] h-[20rem] object-cover"
            src={image}
          />
        </div>

        {/* Content column */}
        <div className="lg:col-span-7 col-span-full flex flex-col justify-center">
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
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
            className="text-[#333333] leading-relaxed mt-3 text-[1.2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
