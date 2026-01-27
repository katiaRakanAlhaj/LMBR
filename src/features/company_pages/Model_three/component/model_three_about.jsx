import ModelThreeTitle from "../../../../component/ui/model_three_title";
import  DOMPurify  from 'dompurify';
import i18n from "../../../../i18n";
const ModelThreeAbout = ({ singleCompanyData }) => {
  return (
    <div className="container7 mx-auto mt-[8rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem]">
        {/* Image column */}
        <div className="lg:col-span-4 col-span-full">
          <div className="lg:h-[28rem] h-[20rem] flex justify-center items-center w-full rounded-tr-2xl rounded-b-2xl rounded-tl-[8rem] bg-[linear-gradient(#E5AC62_0%,_#7F5F36_100%)]">
            <img
              className="w-full lg:h-[28rem] h-[15rem] object-cover"
              src={singleCompanyData?.about_image}
            />
          </div>
        </div>
        {/* Content column */}
        <div className="lg:col-span-8 col-span-full flex flex-col justify-center">
          <ModelThreeTitle title={i18n.t("About the Company")} />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(singleCompanyData?.about_description),
            }}
            className="text-[#333333] leading-relaxed mt-3 text-[1.2rem]"
          />
        </div>
      </div>
    </div>
  );
};
export default ModelThreeAbout;
