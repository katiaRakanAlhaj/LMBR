import logoFooter from "../../../assets/images/logoFooter.png";
import i18next from "i18next";
import SocialIcons from "../../Navbar/socialIcons";
const Footer = () => {
    const firstItems = [
        { desc: i18next.t("Future Meeting Company") },
        { desc: i18next.t("Mesopotamia Construction Company") },
        { desc: i18next.t("Golden Sieves Company") },
        { desc: i18next.t("certificates") },
        { desc: i18next.t("health_and_safety") }
    ];
    const secondItems = [
        { desc: i18next.t("About the Company") },
        { desc: i18next.t("Vision and Mission") },
        { desc: i18next.t("goals") },
        { desc: i18next.t("contact_us") }
    ]
    return (
        <div className="w-full lg:h-[25rem] py-[3rem] bg-[#063252] mt-[6rem]">
            <div className="container5 mx-auto">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-8 col-span-full">
                        <div className="lg:flex gap-x-[5rem]">
                            <div className="flex flex-col">
                                <img className={`w-[16rem] ${i18next.language == "ar"?'pr-[2rem]':'pl-[2rem]'}`} src={logoFooter} />
                                <p className="text-[1.2rem] font-bold text-white mt-[2rem] mb-[2rem] text-center">{i18next.t("join_us")}</p>
                                <div className="mt-[2rem]">
                                    <SocialIcons spacing="3rem" />
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-white text-[1.2rem] lg:mt-[1rem] mt-[2.5rem]">{i18next.t("Quick links")}</p>
                                {firstItems?.map((firstItems) => (
                                    <div className="flex gap-x-2 space-y-4 items-center">
                                        <div className="w-[1.3rem] h-[0.15rem] rounded-full bg-[#099EC8] mt-3"></div>
                                        <p className="text-white text-[1rem]">{firstItems.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-1 lg:mt-[2.45rem]">
                        {secondItems?.map((secondItems) => (
                            <div className="flex gap-x-2 space-y-4 items-center">
                                <div className="w-[1.3rem] h-[0.15rem] rounded-full bg-[#099EC8] mt-3"></div>
                                <p className="text-white text-[1rem]">{secondItems.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;