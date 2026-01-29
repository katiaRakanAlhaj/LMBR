import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import i18next from "i18next";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
const ModelOneProjects = ({ singleCompanyData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.split("T")[0];
  };
  return (
    <div className="container2 mx-auto lg:mt-[6rem] mt-[3rem]">
      {/* Title */}
      <div className="flex gap-x-2 items-center">
        <div className="w-[2rem] h-[1rem] bg-[#099EC8]" />
        <p className="font-bold text-[#333333] text-[1.5rem] mt-2">
          {singleCompanyData?.second_section_title}
        </p>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            singleCompanyData?.second_section_description,
          ),
        }}
        className="text-[1.2rem] text-[#333333] mt-2"
      />
      {/* Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[1rem]">
        {singleCompanyData?.projects?.map((item) => (
<Link to={`/${i18next.language || 'ar'}/project/${item.id}`} key={item.id}>
            <div className="lg:h-[27rem] h-[20rem] rounded-md relative overflow-hidden group cursor-pointer">
              {/* Image */}
              <img src={item.image} className="w-full h-full object-cover" />

              {/* Base gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0) 100%)",
                }}
              />

              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0.85) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute px-[1.4rem] flex justify-between bottom-0 left-0 right-0 h-0 group-hover:h-[6rem] transition-all duration-300 overflow-hidden">
                <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3
                    className={`text-[1.3rem] font-bold mb-1 ${
                      i18next.language === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[1.05rem] opacity-90 ${
                      i18next.language === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {formatDate(item.date)}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-[3rem] h-[3rem] bg-secondary transform translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center">
                  <span className="text-white text-[1.5rem]">
                    {i18next.language === "ar" ? (
                      <GoArrowUpLeft />
                    ) : (
                      <GoArrowUpRight />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelOneProjects;
