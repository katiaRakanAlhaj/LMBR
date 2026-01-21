import Title from "./../../../component/ui/title";
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";

const SingleProjectGrid = ({ singleProjectData, projectsData }) => {
  const { t } = useTranslation();
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.split("T")[0];
  };
  return (
    <div className="container2 mx-auto">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] mt-[3.5rem] gap-[2.5rem]">
        {/* first column*/}
        <div className="lg:col-span-8 col-span-1">
          {/* first section */}
          <div>
            <h1 className="text-[#333333] text-[1.3rem] font-bold">
              لوريم ايبسوم هو نموذج افتراضي
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singleProjectData?.description),
              }}
              className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify"
            />

            <img
              className="w-full h-[20rem] mt-[1rem] object-cover rounded-3xl"
              src={singleProjectData?.image}
            />
          </div>
          {/* second section */}
          <div className="grid lg:grid-cols-2 gap-y-[1.5rem] grid-cols-1 mt-[2rem] gap-x-[2rem]">
            <div>
              <h1 className="text-[#333333] text-[1.3rem] font-bold">
                {singleProjectData?.second_section_title}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    singleProjectData?.second_section_description,
                  ),
                }}
                className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify"
              />
            </div>
            <div>
              <img
                src={singleProjectData?.second_section_image}
                className="w-full h-[20rem] object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* third section*/}
          <div className="mt-[2rem]">
            <h1 className="text-[#333333] text-[1.3rem] font-bold">
              {singleProjectData?.third_section_title}
            </h1>
            <p
              className="leading-relaxed text-[1.2rem] text-[#333333] mt-3 text-justify"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  singleProjectData?.third_section_description,
                ),
              }}
            />
          </div>
        </div>
        {/* second column*/}
        {/* second column - sidebar */}
        <div className="lg:col-span-4 col-span-1 flex flex-col space-y-4">
          <div className="flex justify-center items-center">
            <Title title={t("Other projects")} />
          </div>
          {projectsData?.data?.slice(-3)?.map((item) => (
            <div className="mt-[1rem]" key={item.title}>
              <img
                className="w-full h-[16rem] object-cover rounded-2xl"
                src={item.image}
              />
              <div className="flex justify-between mt-[1rem]">
                <h1 className="text-[1.2rem] font-bold text-[#333333]">
                  {item.title}
                </h1>
                <p className="text-[1rem] text-[#333333]">
                  {formatDate(item.date)}
                </p>
              </div>
              <p className="text-[0.9rem] line-clamp-2 text-[#333333]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleProjectGrid;
