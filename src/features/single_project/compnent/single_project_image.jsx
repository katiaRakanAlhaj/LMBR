import bgPorject from "../../../assets/images/bgSingleProject.png";

const SingleProjectImage = () => {
  return (
    <div className="relative">
      <div className="w-full h-[27rem] relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${bgPorject})`,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(0, 30, 94, 0.5) 13.63%,
                rgba(41, 167, 215, 0) 33.52%
              ),
              linear-gradient(
                360deg,
                #001B3D -15.74%,
                rgba(0, 0, 0, 0) 86.23%
              )
            `,
          }}
        />

        {/* Title */}
        <div className="absolute right-[4rem] bottom-[4rem] z-20 font-[700] text-white lg:text-[2.3rem] text-[1.8rem]">
          title
        </div>
      </div>
    </div>
  );
};

export default SingleProjectImage;
