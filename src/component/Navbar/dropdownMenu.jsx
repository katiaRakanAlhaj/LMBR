// components/DropdownMenu.jsx
import { MdArrowBackIos } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import i18next from "i18next";
import { MdArrowForwardIos } from "react-icons/md";
import { NavLink as RouterLink } from "react-router-dom";

const DropdownMenu = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  items,
  title,
  children,
  dropdownStyle = "normal",
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // If controlled by parent (isOpen prop is provided), use that
  // Otherwise use internal state
  const isMenuOpen = isOpen !== undefined ? isOpen : internalIsOpen;

  const dropdownClasses = {
    normal:
      "absolute top-full mt-3 left-1/2 transform -translate-x-1/2 w-[18rem] z-50",
    "full-width":
      "absolute top-full left-[2rem] right-[2rem] flex justify-center py-6 z-50",
  };

  // Handle mouse enter for the entire menu (trigger + dropdown)
  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter();
    } else {
      setInternalIsOpen(true);
    }
  };

  // Handle mouse leave for the entire menu (trigger + dropdown)
  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    } else {
      setInternalIsOpen(false);
      setActiveIndex(null);
    }
  };

  // Alternative: Use a timer for better UX
  const [closeTimer, setCloseTimer] = useState(null);

  const handleTriggerMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    handleMouseEnter();
  };

  const handleTriggerMouseLeave = () => {
    // Start timer to close after a short delay
    const timer = setTimeout(() => {
      handleMouseLeave();
    }, 150);
    setCloseTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      handleMouseLeave();
    }, 150);
    setCloseTimer(timer);
  };

  const handleItemMouseEnter = (index) => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setActiveIndex(index);
  };

  const handleItemMouseLeave = () => {
    setActiveIndex(null);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [closeTimer]);

  return (
    <div className="relative">
      {/* Trigger */}
      <div
        ref={triggerRef}
        className="flex gap-x-2 items-center cursor-pointer"
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
      >
        <p className="text-white text-[1.1rem] text-nowrap">{title}</p>
        {i18next.language == "ar" ? (
          <MdArrowBackIos
            className={`text-white text-[0.9rem] transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        ) : (
          <MdArrowForwardIos
            className={`text-white text-[0.9rem] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-90" : "rotate-0"
            }`}
          />
        )}
      </div>

      {/* Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`${dropdownClasses[dropdownStyle]} ${dropdownStyle === "normal" ? "flex flex-col" : ""}`}
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(0deg, rgba(231, 121, 45, 0.6), rgba(231, 121, 45, 0.6))",
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {children || (
            <>
              {items?.map((item, index) => (
                <div key={index} className="relative w-full">
                  {/* Hover background - positioned absolutely */}
                  <div
                    className={`absolute inset-0 transition-all duration-200 ${activeIndex === index ? "bg-[#263F57]" : ""}`}
                    style={{
                      zIndex: 0,
                      transform:
                        activeIndex === index ? "scale(1)" : "scale(0.95)",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  />
                  <RouterLink
                    to={item.path}
                    className="relative z-10 flex flex-col items-center text-center text-white text-[1.1rem] py-3 transition-colors duration-200"
                    onMouseEnter={() => handleItemMouseEnter(index)}
                    onMouseLeave={handleItemMouseLeave}
                  >
                    <p
                      className={`transition-colors duration-200 ${activeIndex === index ? "text-white font-medium" : ""}`}
                    >
                      {item.title}
                    </p>
                  </RouterLink>

                  {/* Divider */}
                  {index < items.length - 1 && (
                    <div className="relative  w-full bg-gray-400/50 h-[0.01rem]"></div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
