import i18next from "i18next";
import upload1 from "../../../../assets/images/uploadone.png";
import upload2 from "../../../../assets/images/uploadtwo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
const ModelOneUploadFile = () => {
    const { t } = useTranslation();
    return (
        <div className={`fixed bottom-6 ${i18n.language == "ar" ? 'lg:right-[5rem] right-[1rem]' : 'lg:left-[5rem] left-[1rem]'} z-50`}>
            <div className="relative w-[23rem] md:h-[3.8rem] h-[3rem] bg-[#063252E5] rounded-full flex justify-center items-center">
                <p className="text-white font-bold text-[1rem]">
                    {t("Download Company Profile")}
                </p>
                <img
                    className={`absolute top-1/2 -translate-y-1/2 ${i18next.language === "ar" ? "left-[1.5rem]" : "right-[1.5rem]"
                        } w-[1.5rem]`}
                    src={upload2}
                />
            </div>
            {/* Decorative circle */}
            <div
                className={`absolute md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] rounded-full bg-[#CA3535] flex justify-center items-center md:-top-[1.5rem] -top-[1.3rem] ${i18next.language === "ar" ? "-right-[1rem]" : "-left-[1rem]"
                    }`}
            >
                <img className="w-[3rem]" src={upload1} />
            </div>
        </div>
    );
};

export default ModelOneUploadFile;
