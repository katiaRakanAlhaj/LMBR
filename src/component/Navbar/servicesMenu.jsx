import React, { forwardRef } from "react";
import { Link, useParams } from "react-router-dom";

const ServicesMenu = forwardRef(({ servicesData, isOpen }, ref) => {
  const { lang } = useParams();
  
  if (!isOpen) return null;

  // Safety check
  if (!servicesData || !servicesData.data) return null;

  // Helper function to create service path with language prefix
  const createServicePath = (serviceId) => {
    return `/${lang || 'ar'}/service/${serviceId}`;
  };

  return (
    <div
      ref={ref}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(0deg, rgba(231, 121, 45, 0.6), rgba(231, 121, 45, 0.6))"
      }}
      className="absolute top-full left-[2rem] right-[2rem] z-50"
    >
      {/* Fixed 5 columns grid */}
      <div className="grid grid-cols-5">
        {servicesData.data.map((service) => (
          <Link
            key={service.id}
            to={createServicePath(service.id)}
            className="border border-white/30 text-white text-[1.1rem]
                       hover:bg-[#263F57] transition-colors
                       flex items-center justify-center min-h-[4.5rem] px-4"
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