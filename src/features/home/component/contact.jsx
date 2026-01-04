import Title from "../../../component/ui/title";
import { useTranslation } from "react-i18next";
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="mt-[5rem] container4 mx-auto">
            <div className="grid grid-cols-2 gap-x-[2rem]">
                {/* first column */}
                <div>
                    <Title title={t("contact_us")} />
                    <h1 className="font-bold text-primary text-[2rem] mt-[1rem]">{t("contact_information")}</h1>
                </div>
                {/* second column */}
                <div style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-[30rem] border py-[4rem] px-[3rem]">
                    <h1 className="text-[#002623] font-bold text-[2rem]">{t("contact")}</h1>
                </div>
            </div>
        </div>
    )
}
export default Contact;