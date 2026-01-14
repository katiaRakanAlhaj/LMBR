import { useTranslation } from "react-i18next";

const EmploymentSection = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-[8rem] container7 mx-auto">
      <div className="grid grid-cols-3 gap-x-[8rem]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-[2rem] items-center"
          >
            <img
              className="w-[5rem] h-[5rem] object-contain"
              src={item.image}
              alt={item.descKey}
            />

            <div>
              <p className="font-bold text-[2.3rem] text-secondary">
                {item.title}
              </p>
              <p className="text-[#333333] text-[1.4rem] font-bold text-nowrap">
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
