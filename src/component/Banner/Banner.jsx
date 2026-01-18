const Banner = ({ image, title }) => {
  return (
    <div className="relative">
      <div className="w-full lg:h-[32rem] h-[20rem]">
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
              linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 118.91%)
            `,
          }}
        />
        {/* Title */}
      </div>
      <div className="absolute right-[4rem] bottom-[4rem] font-[700] text-white lg:text-[2.3rem] text-[1.8rem]">
        {title}
      </div>
    </div>
  );
};

export default Banner;
