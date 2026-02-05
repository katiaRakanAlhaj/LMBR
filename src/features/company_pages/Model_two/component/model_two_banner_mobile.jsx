import DOMPurify from "dompurify";
const ModelTwoBannerMobile = ({ singleCompanyData }) => {
  return (
    <div>
      {/* Mobile version - stacked layout */}
      <div className="lg:hidden block bg-gradient-to-b from-[#43515A] to-[#2A3B45] pt-8 pb-12 h-auto">
        <div className="container mx-auto px-4">
          {/* Image Section */}
          <div className="">
            <img
              src={singleCompanyData?.banner}
              alt="Banner"
              className="w-full h-[15rem] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-white text-center px-4">
            <h2 className="font-bold text-xl">
              {singleCompanyData?.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singleCompanyData?.description),
              }}
              className="text-md flex items-center justify-center text-center leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTwoBannerMobile;
