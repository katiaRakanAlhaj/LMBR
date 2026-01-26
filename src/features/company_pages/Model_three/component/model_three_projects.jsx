import ModelThreeTitle from "./../../../../component/ui/model_three_title";
import DOMPurify from "dompurify";
const ModelThreeProjects = ({ singleCompanyData }) => {
  return (
    <div className="container2 mx-auto lg:mt-[7rem] mt-[3rem]">
      {/* first section */}
      <div>
        <ModelThreeTitle title={singleCompanyData?.second_section_title} />
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              singleCompanyData?.second_section_description,
            ),
          }}
          className="text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]"
        />
        <img
          className="w-full h-[18rem] mt-[1rem] object-cover rounded-xl"
          src={singleCompanyData?.second_section_image}
        />
      </div>
      {/* second section */}
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[2rem] mt-[2rem]">
        <div className="lg:col-span-8 col-span-1">
          <ModelThreeTitle title={singleCompanyData?.third_section_title} />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                singleCompanyData?.third_section_description,
              ),
            }}
            className="text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]"
          />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <img
            className="h-[20rem] rounded-xl object-cover w-full"
            src={singleCompanyData?.third_section_image}
          />
        </div>
      </div>
      {/* third section */}
      <div className="mt-[2rem]">
        <ModelThreeTitle title={singleCompanyData?.forth_section_title} />
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              singleCompanyData?.forth_section_description,
            ),
          }}
          className="text-[1.2rem] text-[#333333] flex text-justify leading-relaxed mt-[0.5rem]"
        />
      </div>
    </div>
  );
};
export default ModelThreeProjects;
