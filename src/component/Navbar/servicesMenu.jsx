import React, { forwardRef } from "react";

const ServicesMenu = forwardRef(({ servicesData, isOpen }, ref) => {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(0deg, rgba(231, 121, 45, 0.6), rgba(231, 121, 45, 0.6))"
      }}
      className="absolute top-full left-[2rem] right-[2rem] z-50"
    >
      <div className="grid grid-cols-3">
        {servicesData.map((column, columnIndex) => (
          <div 
            key={columnIndex} 
            className={`
              border-r border-white/30 
              ${columnIndex === servicesData.length? 'border-r-0' : ''}
            `}
          >
            {column.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className={`
                  border-b border-white/30 
                  ${serviceIndex === column.length - 1 ? 'border-b-0' : ''}
                `}
              >
                <div 
                  className="text-white text-[1.1rem] hover:bg-[#263F57] cursor-pointer transition-colors duration-200 flex items-center justify-center min-h-[4rem] px-4"
                >
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

ServicesMenu.displayName = "ServicesMenu";

export default ServicesMenu;