import imagemodel3 from "../../../../assets/images/imagemodel3.png";
import rectangle41 from "../../../../assets/images/Rectangle 41.png";
import i18n from "../../../../i18n";
import  DOMPurify  from 'dompurify';
const ModelThreeBanner = ({ singleCompanyData }) => {
  return (
    <div className="relative">
      <div className="w-full lg:h-[45rem] h-[20rem] relative">
        {/* Orange background extending 20rem more */}
        <div
          className="absolute w-full bg-[#E5AC62] -z-30"
          style={{
            height: "calc(100% + 2rem)",
            clipPath: "ellipse(100% 100% at 50% 0%)",
            top: 0,
            left: 0,
          }}
        ></div>

        {/* Background Image with Clip Path (arch from bottom) */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${singleCompanyData?.banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            clipPath: "ellipse(100% 100% at 50% 0%)",
          }}
        />

        {/* Rectangle 41.png image - at original height */}
        <div
          className="absolute w-full h-full overflow-hidden -z-20"
          style={{
            height: "90%",
            clipPath: "ellipse(100% 100% at 50% 0%)",
            top: 0,
            left: 0,
          }}
        >
          <img
            src={rectangle41}
            alt="Rectangle 41"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div
          className={`absolute lg:w-[25rem] w-[10rem] -bottom-[1rem] object-cover ${i18n.language == "ar" ? "lg:right-[10rem] right-[1rem]" : "lg:left-[10rem] left-[2rem]"}`}
        >
          <img src={imagemodel3} alt="Model 3" />
        </div>
        <div
          className={`absolute lg:block hidden ${i18n.language == "ar" ? "right-1/2" : "left-1/2"} mt-[-2.5rem] top-1/2`}
        >
          <h1 className="font-[700] text-white lg:text-[2.3rem] text-[1.8rem]">
            {singleCompanyData?.title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(singleCompanyData?.description),
            }}
            className="text-[1.2rem] mt-3 text-white w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ModelThreeBanner;
