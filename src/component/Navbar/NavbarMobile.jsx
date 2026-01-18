import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { MyContext } from "../store";
import i18next from "i18next";
import i18n from "../../i18n";

const NavbarMobile = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(MyContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    about: false,
    companies: false,
    services: false
  });

  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  
  const aboutItems = [
    { title: t("about_us"), path: '/about' },
    { title: t("vision_and_mission"), path: '/vission' },
    { title: t("goals"), path: '/goals' },
  ];

  const companyItems = [
    { title: t("future_meeting_company"), path: "/company1" },
    { title: t("Al-Rafidain Construction Company"), path: "/company2" },
    { title: t("Golden Sieves Company"), path: "/company3" },
  ];

  const servicesItems = [
    { id: 1, title: t("service_1"), path: "/service/1" },
    { id: 2, title: t("service_2"), path: "/service/2" },
    { id: 3, title: t("service_3"), path: "/service/3" },
    { id: 4, title: t("service_4"), path: "/service/4" },
    { id: 5, title: t("service_5"), path: "/service/5" },
    { id: 6, title: t("service_6"), path: "/service/6" },
    { id: 7, title: t("service_7"), path: "/service/7" },
    { id: 8, title: t("service_8"), path: "/service/8" },
    { id: 9, title: t("service_9"), path: "/service/9" },
    { id: 10, title: t("service_10"), path: "/service/10" },
    { id: 11, title: t("service_11"), path: "/service/11" },
    { id: 12, title: t("service_12"), path: "/service/12" },
  ];

  const navItems = [
    { path: "/", label: t("home") },
    { 
      label: t("about_us"), 
      hasDropdown: true,
      key: "about",
      items: aboutItems
    },
    { 
      label: t("companies"), 
      hasDropdown: true,
      key: "companies",
      items: companyItems
    },
    { 
      label: t("services"), 
      hasDropdown: true,
      key: "services",
      items: servicesItems
    },
    { path: "/certificates", label: t("certificates") },
    { path: "/company_equipment", label: t("company_equipment") },
    { path: "/health_and_safety", label: t("health_and_safety") },
    { path: "/contact", label: t("contact_us") },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) {
      setExpandedSections({
        about: false,
        companies: false,
        services: false
      });
    }
  };

  const toggleDropdown = (key) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return currentPath === path;
  };

  const isActiveDropdown = (items) => {
    return items.some(item => currentPath === item.path);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const handleNavigate = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);
    i18next.changeLanguage(storedLanguage);
  }, [setLanguage]);

  const handleChange = () => {
    const newLang = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setLanguage(newLang);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const renderDropdownItems = (items, isService = false) => {
    // For both services and other dropdown items, they should have paths
    return items.map((item) => (
      <div
        key={item.id || item.path}
        className={`py-3 px-6 text-white border-b border-white/20 text-sm ${
          isActive(item.path) ? "bg-white/10" : ""
        } cursor-pointer`}
        onClick={() => handleNavigation(item.path)}
      >
        {item.title}
      </div>
    ));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Header */}
      <div 
        className="flex justify-between items-center h-16 px-4"
        style={{
          background: "linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), linear-gradient(0deg, rgba(231,121,45,0.6), rgba(231,121,45,0.6))"
        }}
      >
        <img
          onClick={handleNavigate}
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-cover cursor-pointer"
        />
        
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-x-2 text-white text-sm cursor-pointer">
            <span
              className={`${language === "en" ? "font-bold text-[#263F57]" : ""}`}
              onClick={handleChange}
            >
              EN
            </span>
            <span>|</span>
            <span
              className={`${language === "ar" ? "font-bold text-[#263F57]" : ""}`}
              onClick={handleChange}
            >
              AR
            </span>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-16 bg-black/50"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
        className={`fixed top-16 right-0 bottom-0 w-3/4 bg-[#263F57] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <div className="border-b border-white/20">
                  <div
                    className={`flex justify-between items-center py-4 px-6 text-white text-[1.1rem] cursor-pointer ${
                      isActiveDropdown(item.items) ? "bg-white/10" : ""
                    }`}
                    onClick={() => toggleDropdown(item.key)}
                  >
                    <span>{item.label}</span>
                    {i18next.language === "ar" ? (
                      <MdArrowBackIos
                        className={`text-white text-[0.9rem] transition-transform duration-300 ${
                          expandedSections[item.key] ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    ) : (
                      <MdArrowForwardIos
                        className={`text-white text-[0.9rem] transition-transform duration-300 ${
                          expandedSections[item.key] ? "-rotate-90" : "rotate-0"
                        }`}
                      />
                    )}
                  </div>
                  
                  {expandedSections[item.key] && (
                    <div className="bg-[#1a2c3d]">
                      {renderDropdownItems(item.items)}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`py-4 px-6 text-white text-[1.1rem] border-b border-white/20 cursor-pointer ${
                    isActive(item.path) ? "bg-white/10" : ""
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default NavbarMobile;