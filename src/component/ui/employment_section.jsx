import { useTranslation } from "react-i18next";

const EmploymentSection = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:mt-[8rem] mt-[3rem] container7 mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-[2rem] grid-cols-1 gap-x-[8rem]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-[2rem] items-center"
          >
            <img
              className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] object-contain"
              src={item.image}
              alt={item.descKey}
            />

            <div>
              <p className="font-bold md:text-[2.3rem] text-[1.5rem] text-secondary">
                {item.title}
              </p>
              <p className="text-[#333333] md:text-[1.4rem] text-[1.1rem] font-bold text-wrap">
                {t(item.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentSection;
