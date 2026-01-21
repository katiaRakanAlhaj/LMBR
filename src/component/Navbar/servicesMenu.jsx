import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const ServicesMenu = forwardRef(({ servicesData, isOpen }, ref) => {
  if (!isOpen) return null;

  // Safety check
  if (!servicesData || !servicesData.data) return null;

  return (
    <div
      ref={ref}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(0deg, rgba(231, 121, 45, 0.6), rgba(231, 121, 45, 0.6))"
      }}
      className="absolute top-full left-[2rem] right-[2rem] z-50"
    >
      <div className="grid grid-rows-3 grid-flow-col">
        {servicesData.data.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="border border-white/30 text-white text-[1.1rem]
                       hover:bg-[#263F57] transition-colors
                       flex items-center justify-center min-h-[4rem] px-4"
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
});

ServicesMenu.displayName = "ServicesMenu";
export default ServicesMenu;
