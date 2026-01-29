import { useContext, useEffect, useState, useRef } from "react";
import i18n from "../../i18n";
import { MyContext } from "../store";
import logo from "../../assets/images/logo.png";
import i18next from "i18next";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import DropdownMenu from "./dropdownMenu";
import ServicesMenu from "./servicesMenu";
import SocialIcons from "./socialIcons";
import NavLink from "./NavLink";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ contactData, servicesData, companyData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const { language, setLanguage } = useContext(MyContext);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [companyName, setCompanyName] = useState("");
  const [isCompanyPage, setIsCompanyPage] = useState(false);

  const { id } = useParams();
  const navbarRef = useRef(null);
  const servicesMenuRef = useRef(null);

  // Helper function to get current language from URL or context
  const getCurrentLang = () => {
    return lang || language || "ar";
  };

  // Helper function to create paths with language prefix
  const createPath = (path) => {
    const currentLang = getCurrentLang();
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `/${currentLang}/${cleanPath}`;
  };

  const aboutItems = [
    { title: i18next.t("about_us"), path: createPath("about") },
    { title: i18next.t("vision_and_mission"), path: createPath("vission") },
    { title: i18next.t("goals"), path: createPath("goals") },
  ];

  const companyItems = companyData?.data?.map((company) => ({
    title: company.name,
    path: createPath(`company/${company.id}`),
  }));

  // Update language based on URL
  useEffect(() => {
    if (lang && lang !== language) {
      i18n.changeLanguage(lang);
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  }, [lang, language, setLanguage]);

  // Effect to update logo and company name based on route
  useEffect(() => {
    const companyPageCheck = location.pathname.includes("/company/") && id;
    setIsCompanyPage(companyPageCheck);

    if (companyPageCheck && id && companyData?.data) {
      const currentCompany = companyData.data.find(
        (company) => company.id.toString() === id
      );

      if (currentCompany) {
        setCurrentLogo(currentCompany.logo);
        setCompanyName(currentCompany.name);
      } else {
        setCurrentLogo(logo);
        setCompanyName("");
      }
    } else {
      setCurrentLogo(logo);
      setCompanyName("");
    }
  }, [id, location.pathname, companyData]);

  const handleLanguageChange = (newLang) => {
    const currentPath = location.pathname;
    
    // Replace the language segment in the URL
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${newLang}`);
    
    // If no language prefix exists, add it
    if (!/^\/(en|ar)/.test(currentPath)) {
      navigate(`/${newLang}${currentPath}`);
    } else {
      navigate(newPath);
    }
    
    // Save language preference
    localStorage.setItem("language", newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    
    // Reload the page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
    setIsAboutDropdownOpen(false);
    setIsCompaniesDropdownOpen(false);
  };

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
    setIsServicesDropdownOpen(false);
  };

  const handleCompaniesMouseEnter = () => {
    setIsCompaniesDropdownOpen(true);
    setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
        setIsCompaniesDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    if (!isCompanyPage) {
      navigate(createPath(""));
    }
  };

  const currentLang = getCurrentLang();

  return (
    <div ref={navbarRef} className="relative">
      {/* Fixed Navbar */}
      <div
        className="fixed top-0 z-50 w-full px-[4rem] h-[10rem]
                   bg-[#263F574D] backdrop-blur-sm
                   flex items-center justify-between"
      >
        {/* Logo and Company Name Container */}
        <div className="flex items-center gap-x-6">
          {/* Dynamic logo with conditional size */}
          <div
            className={`mt-[-3rem] ${isCompanyPage ? "w-[16rem] h-[5rem] mr-4" : "w-[10rem]"} 
                       ${!isCompanyPage ? "cursor-pointer hover:opacity-90 transition-opacity" : "cursor-default"}`}
            onClick={handleLogoClick}
          >
            <img
              className="w-full h-full"
              src={currentLogo}
              alt="Logo"
              onError={(e) => {
                e.target.src = logo;
                setCurrentLogo(logo);
              }}
            />
          </div>
          {/* Show company name next to logo on company pages */}
          {isCompanyPage && companyName && (
            <div className="flex flex-col justify-center mt-[-3rem]">
              <h1 className="text-white text-3xl font-bold leading-tight">
                {companyName}
              </h1>
            </div>
          )}
        </div>

        <SocialIcons contactData={contactData} />

        {/* Language Switcher */}
        <div
          className={`absolute bottom-[0.6rem] ${
            currentLang === "ar" ? "left-[3.5rem]" : "left-[3.5rem]"
          } flex gap-x-2 text-white text-[1.1rem] cursor-pointer z-50`}
        >
          <span
            className={`${currentLang === "en" ? "font-bold text-[#263F57]" : ""} hover:text-[#263F57] transition-colors duration-200`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </span>
          <span>|</span>
          <span
            className={`${currentLang === "ar" ? "font-bold text-[#263F57]" : ""} hover:text-[#263F57] transition-colors duration-200`}
            onClick={() => handleLanguageChange("ar")}
          >
            AR
          </span>
        </div>

        {/* Navbar Links */}
        <div
          className="absolute right-0 bottom-0 h-[3.5rem] w-full border-t border-t-white"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), linear-gradient(0deg, rgba(231,121,45,0.6), rgba(231,121,45,0.6))",
          }}
        >
          <div className="container1 mx-auto mt-[1rem] flex gap-x-[4rem] relative">
            <NavLink title={i18next.t("home")} path={createPath("")} />

            <DropdownMenu
              title={i18next.t("about_us")}
              isOpen={isAboutDropdownOpen}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              items={aboutItems}
            />

            <DropdownMenu
              title={i18next.t("companies")}
              isOpen={isCompaniesDropdownOpen}
              onMouseEnter={handleCompaniesMouseEnter}
              onMouseLeave={() => setIsCompaniesDropdownOpen(false)}
              items={companyItems}
            />

            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={() => {}}
            >
              <div className="flex gap-x-2 items-center cursor-pointer">
                <p className="text-white text-[1.1rem]">
                  {i18next.t("services")}
                </p>
                {currentLang === "ar" ? (
                  <MdArrowBackIos
                    className={`text-white text-[0.9rem] transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                ) : (
                  <MdArrowForwardIos
                    className={`text-white text-[0.9rem] transition-transform duration-300 ${
                      isServicesDropdownOpen ? "-rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </div>
            </div>

            <NavLink
              title={i18next.t("certificates")}
              path={createPath("certificates")}
            />
            <NavLink
              title={i18next.t("company_equipment")}
              path={createPath("company_equipment")}
            />
            <NavLink
              title={i18next.t("health_and_safety")}
              path={createPath("health_and_safety")}
            />
            <NavLink
              title={i18next.t("contact_us")}
              path={createPath("contact")}
            />
          </div>
        </div>
      </div>

      {/* Services Dropdown */}
      {isServicesDropdownOpen && (
        <div
          className="fixed top-[10rem] left-0 right-0 z-40"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <ServicesMenu
            ref={servicesMenuRef}
            servicesData={servicesData}
            isOpen={isServicesDropdownOpen}
            currentLang={currentLang}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;