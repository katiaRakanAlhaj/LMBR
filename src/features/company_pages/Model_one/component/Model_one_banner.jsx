import image from "../../../../assets/images/bgmodel1.jpg";
import leftimage from "../../../../assets/images/leftmodeloneimage.png";
import i18n from './../../../../i18n';
const ModelOneBanner = () => {
  return (
    <div className="relative w-full h-[52rem] overflow-hidden">
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <clipPath id="arch-clip">
            <path d="M0,500 C300,360 1080,370 1440,500 L1440,0 L0,0 Z" />
          </clipPath>
        </defs>

        <image
          href={image}
          width="1440"
          height="500"
          clipPath="url(#arch-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      {/* TITLE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white lg:text-[2.3rem] text-[1.8rem] z-10">
        شركة لقاء المستقبل
      </div>
      <div className={`absolute ${i18n.language == "en"?'-right-[8rem]':'-left-[8rem]'} bottom-[2rem] w-[25rem] h-[25rem]`}>
        <img className="abject-contain" src = {leftimage}/>
      </div>
    </div>
  );
};

export default ModelOneBanner;
