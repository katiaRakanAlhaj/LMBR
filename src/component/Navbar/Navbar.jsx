import { useContext, useEffect, useState } from "react";
import i18n from "../../i18n";
import { MyContext } from "../store";
import logo from "../../assets/images/logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import i18next from "i18next";
import { MdArrowBackIos } from "react-icons/md";

const Navbar = () => {
  const { language, setLanguage } = useContext(MyContext);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const social = [
    { icon: <FaLinkedinIn /> },
    { icon: <FaInstagram /> },
    { icon: <FaTwitter /> },
    { icon: <BiLogoFacebook /> },
    { icon: <FaYoutube /> },
  ];
  const aboutItems = [
    { title: i18next.t("about_us") },
    { title: i18next.t("vision_and_mission") },
    { title: i18next.t("goals") }
  ];
  const comanyItems = [
    { title: i18next.t("future_meeting_company") },
    { title: i18next.t("Al-Rafidain Construction Company") },
    { title: i18next.t("Golden Sieves Company") }
  ]
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "ar";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
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

  return (
    <div>
      <div
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        className="absolute top-0 z-10 w-full px-[4rem] h-[10rem] bg-[#263F574D] flex items-center justify-between"
      >
        <img className="w-[10rem] mt-[-3rem]" src={logo} alt="Logo" />
        <div className="flex gap-x-[1.5rem]">
          {social.map((s, index) => (
            <div key={index} className="text-white text-2xl cursor-pointer mt-[-2.2rem]">
              {s.icon}
            </div>
          ))}
        </div>

        <div
          className="absolute right-0 bottom-0 h-[3.5rem] w-full border-t border-t-white"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(0deg, rgba(231, 121, 45, 0.5), rgba(231, 121, 45, 0.5))'
          }}
        >
          <div className="container1 mx-auto mt-[1rem] flex gap-x-[4rem] relative">
            <p className="text-white text-[1.1rem]">{i18next.t("home")}</p>

            {/* About Us with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <div className="flex gap-x-2 items-center cursor-pointer">
                <p className="text-white text-[1.1rem]">{i18next.t("about_us")}</p>
                <icon className="text-white"><MdArrowBackIos /> </icon>
              </div>

              {/* About Us Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(0deg, rgba(231, 121, 45, 0.5), rgba(231, 121, 45, 0.5))'
                }}
                  className="absolute top-[1.9rem] left-1/2 transform -translate-x-1/2 mt-2 w-[17rem] flex flex-col items-center h-auto pt-[1rem] z-20 space-y-[1rem]"

                >
                  {aboutItems?.map((aboutItems) => (
                    <>
                      <div className="flex flex-col items-center text-white text-[1.1rem]"><p>{aboutItems.title}</p></div>
                      <div className="w-full bg-gray-400 h-[0.01rem]"></div>
                    </>
                  ))}
                </div>
              )}
            </div>

            {/* Companies with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompaniesDropdownOpen(true)}
              onMouseLeave={() => setIsCompaniesDropdownOpen(false)}
            >
              <div className="flex gap-x-2 items-center cursor-pointer">
                <p className="text-white text-[1.1rem]">{i18next.t("companies")}</p>
                <icon className="text-white"><MdArrowBackIos /> </icon>
              </div>

              {/* Companies Dropdown Menu */}
               {isCompaniesDropdownOpen && (
                <div style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(0deg, rgba(231, 121, 45, 0.5), rgba(231, 121, 45, 0.5))'
                }}
                  className="absolute top-[1.9rem] left-1/2 transform -translate-x-1/2 mt-2 w-[17rem] flex flex-col items-center h-auto pt-[1rem] z-20 space-y-[1rem]"

                >
                  {comanyItems?.map((comanyItems) => (
                    <>
                      <div className="flex flex-col items-center text-white text-[1.1rem]"><p>{comanyItems.title}</p></div>
                      <div className="w-full bg-gray-400 h-[0.01rem]"></div>
                    </>
                  ))}
                </div>
              )}
            </div>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className="flex gap-x-2 items-center cursor-pointer">
                <p className="text-white text-[1.1rem]">{i18next.t("services")}</p>
                <icon className="text-white"><MdArrowBackIos /> </icon>
              </div>

              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[16.125rem] h-[10rem] bg-black z-20"
                  style={{ width: '258px' }}
                >
                  <div className="p-4 text-white">
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Service 1</p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Service 2</p>
                    <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Service 3</p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-white text-[1.1rem]">{i18next.t("certificates")}</p>
            <p className="text-white text-[1.1rem]">{i18next.t("company_equipment")}</p>
            <p className="text-white text-[1.1rem]">{i18next.t("health_and_safety")}</p>
            <p className="text-white text-[1.1rem]">{i18next.t("contact_us")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;