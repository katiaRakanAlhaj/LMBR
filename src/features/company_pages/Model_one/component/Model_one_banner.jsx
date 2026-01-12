import image from "../../../../assets/images/bgmodel1.jpg";

const ModelOneBanner = () => {
  return (
    <div className="relative w-full h-[32rem] overflow-hidden">
      
      {/* SVG CLIP PATH DEFINITION */}
      <svg
        width="0"
        height="0"
        viewBox="0 0 1400 160"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="bottomWave" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0,0
                L 1,0
                L 1,0.82
                C 9,0.2 0.25,0.92 0,0.82
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center bottom",
          clipPath: "url(#bottomWave)",
          WebkitClipPath: "url(#bottomWave)",
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(0, 30, 94, 0.5) 13.63%, rgba(41, 167, 215, 0) 33.52%),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 118.91%)
          `,
          clipPath: "url(#bottomWave)",
          WebkitClipPath: "url(#bottomWave)",
        }}
      />

      {/* TITLE */}
      <div className="absolute right-[4rem] bottom-[4rem] font-bold text-white lg:text-[2.3rem] text-[1.8rem] z-10">
        title
      </div>
    </div>
  );
};

export default ModelOneBanner;
