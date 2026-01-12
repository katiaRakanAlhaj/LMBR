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

const Navbar = () => {
  const { language, setLanguage } = useContext(MyContext);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navbarRef = useRef(null);
  const servicesMenuRef = useRef(null);

  const aboutItems = [
    { title: i18next.t("about_us"), path: '/about' },
    { title: i18next.t("vision_and_mission"), path: '/vission' },
    { title: i18next.t("goals"), path: '/goals' },
  ];

  const companyItems = [
    { title: i18next.t("future_meeting_company") ,path:"/company"},
    { title: i18next.t("Al-Rafidain Construction Company") ,path:"/company"},
    { title: i18next.t("Golden Sieves Company") , path:"/company" },
  ];

 const servicesData = [
  [
    { id: 1, title: i18next.t("service_1") },
    { id: 2, title: i18next.t("service_2") },
    { id: 3, title: i18next.t("service_3") },
    { id: 4, title: i18next.t("service_4") },
    { id: 5, title: i18next.t("service_5") },
    { id: 6, title: i18next.t("service_6") },
    { id: 7, title: i18next.t("service_7") },
    { id: 8, title: i18next.t("service_8") },
    { id: 9, title: i18next.t("service_9") },
    { id: 10, title: i18next.t("service_10") },
    { id: 11, title: i18next.t("service_11") },
    { id: 12, title: i18next.t("service_12") },
  ],
];


  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "ar";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, [setLanguage]);

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLanguage(lang);
    setTimeout(() => {
      window.location.reload();
    }, 300);
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

  return (
    <div ref={navbarRef} className="relative">
      {/* Fixed Navbar */}
      <div
        className="fixed top-0 z-50 w-full px-[4rem] h-[10rem]
                   bg-[#263F574D] backdrop-blur-sm
                   flex items-center justify-between"
      >
        <img className="w-[10rem] mt-[-3rem]" src={logo} alt="Logo" />
        <SocialIcons />

        {/* Language Switcher */}
        <div className={`absolute bottom-[0.6rem] ${i18next.language == "ar" ? 'left-[3.5rem]' : 'right-[3.5rem]'} flex gap-x-2 text-white text-[1.1rem] cursor-pointer z-50`}>
          <span
            className={`${language === "en" ? "font-bold text-[#263F57]" : ""}`}
            onClick={() => handleChange("en")}
          >
            EN
          </span>
          <span>|</span>
          <span
            className={`${language === "ar" ? "font-bold text-[#263F57]" : ""}`}
            onClick={() => handleChange("ar")}
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
            <NavLink title={i18next.t("home")} />

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
              onMouseLeave={() => { }}
            >
              <div className="flex gap-x-2 items-center cursor-pointer">
                <p className="text-white text-[1.1rem]">{i18next.t("services")}</p>
                {i18next.language == "ar" ? (
                  <MdArrowBackIos
                    className={`text-white text-[0.9rem] transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-90" : "rotate-0"
                      }`}
                  />
                ) : (
                  <MdArrowForwardIos
                    className={`text-white text-[0.9rem] transition-transform duration-300 ${isServicesDropdownOpen ? "-rotate-90" : "rotate-0"
                      }`}
                  />
                )}
              </div>
            </div>

            <NavLink title={i18next.t("certificates")} path="/certificates" />
            <NavLink title={i18next.t("company_equipment")} path = "/company_equipment"/>
            <NavLink title={i18next.t("health_and_safety")} path = "/health_and_safety"/>
            <NavLink title={i18next.t("contact_us")} path = "/contact"/>
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
          />
        </div>
      )}
    </div>
  );
};
export default Navbar;
