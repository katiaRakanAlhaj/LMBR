import i18next from "i18next";
import { Link } from "react-router-dom";
import SocialIcons from "../../Navbar/socialIcons";

const Footer = ({ footerData, contactData, companyData }) => {
  // Dynamic company items from companyData
  const firstItems = [
    // Map company data to the required format
    ...(companyData?.data?.map((company) => ({
      desc: company.name,
      path: `/company/${company.id}`,
    })) || []),
    { desc: i18next.t("certificates"), path: "/certificates" },
    { desc: i18next.t("health_and_safety"), path: "/health_and_safety" },
  ];

  const secondItems = [
    { desc: i18next.t("About the Company"), path: "/about" },
    { desc: i18next.t("Vision and Mission"), path: "/vission" },
    { desc: i18next.t("goals"), path: "/goals" },
    { desc: i18next.t("contact_us"), path: "/contact" },
  ];

  return (
    <div className="w-full lg:h-[28rem] py-[3rem] bg-[#063252] mt-[6rem]">
      <div className="container5 mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-8 col-span-full">
            <div className="lg:flex gap-x-[5rem]">
              <div className="flex flex-col">
                <Link to = "/">
                <img
                  className={`w-[16rem] ${i18next.language == "ar" ? "pr-[2rem]" : "pl-[2rem]"}`}
                  src={footerData?.data?.logo}
                />
                </Link>
                <p className="text-[1.2rem] font-bold text-white mt-[2rem] mb-[2rem] text-center">
                  {i18next.t("join_us")}
                </p>
                <div className="mt-[2rem]">
                  <SocialIcons spacing="3rem" contactData={contactData} />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-[1.2rem] lg:mt-[1rem] mt-[2.5rem]">
                  {i18next.t("Quick links")}
                </p>
                {firstItems?.map((item, index) => (
                  <Link key={index} to={item.path}>
                    <div className="flex gap-x-2 space-y-4 items-center">
                      <div className="w-[1.3rem] h-[0.15rem] rounded-full bg-[#099EC8] mt-3"></div>
                      <p className="text-white text-[1rem]">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1 lg:mt-[2.45rem]">
            {secondItems?.map((item, index) => (
              <Link key={index} to={item.path}>
                <div className="flex gap-x-2 space-y-4 items-center">
                  <div className="w-[1.3rem] h-[0.15rem] rounded-full bg-[#099EC8] mt-3"></div>
                  <p className="text-white text-[1rem]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[0.01rem] mt-[3rem] bg-[#C1C7CD]"></div>
        <p className="text-[1.1rem] text-white mt-[3rem] flex justify-center items-center">
          {footerData?.data?.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
