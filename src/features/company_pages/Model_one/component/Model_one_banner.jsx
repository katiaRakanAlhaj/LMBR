import image from "../../../../assets/images/bgmodel1.jpg";
import leftimage from "../../../../assets/images/leftmodeloneimage.png";
import i18n from './../../../../i18n';

const ModelOneBanner = () => {
  return (
    <div className="relative w-full lg:h-[52rem] h-[25rem] overflow-hidden">
      
      {/* SVG WITH IMAGE AND GRADIENT */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full absolute inset-0"
      >
        <defs>
          {/* Clip path for the arch shape */}
          <clipPath id="arch-clip">
            <path d="M0,500 C300,360 1080,370 1440,500 L1440,0 L0,0 Z" />
          </clipPath>
          
          {/* Gradient definitions */}
          <linearGradient id="gradient1" x1="0" y1="1" x2="0" y2="0">
            <stop offset="13.63%" stopColor="#001E5E" stopOpacity="0.5" />
            <stop offset="33.52%" stopColor="#29A7D7" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="-15.74%" stopColor="#001B3D" />
            <stop offset="86.23%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background image with arch clip */}
        <image
          href={image}
          width="1440"
          height="600"
          clipPath="url(#arch-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
        
        {/* First gradient overlay */}
        <rect
          width="1440"
          height="600"
          clipPath="url(#arch-clip)"
          fill="url(#gradient1)"
        />
        
        {/* Second gradient overlay */}
        <rect
          width="1440"
          height="600"
          clipPath="url(#arch-clip)"
          fill="url(#gradient2)"
        />
      </svg>

      {/* TITLE */}
      <div className="absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        font-bold text-white 
        lg:text-[2.3rem] text-[1.8rem] 
        z-10">
        شركة لقاء المستقبل
      </div>

      {/* SIDE IMAGE */}
      <div
        className={`absolute ${
          i18n.language === "en" ? "-right-[8rem]" : "-left-[8rem]"
        } bottom-[2rem] lg:w-[25rem] lg:h-[25rem] w-[12rem] h-[12rem] z-10`}
      >
        <img className="object-contain" src={leftimage} alt="side decoration" />
      </div>

    </div>
  );
};

export default ModelOneBanner;