import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Button from "../../../component/ui/buuton";
import Title from "../../../component/ui/title";

const inputClass =
  "w-full h-[3.7rem] rounded-sm border outline-none px-4 shadow-custom";

const textareaClass =
  "w-full h-[10rem] rounded-sm border outline-none p-[1rem] shadow-custom";

const infoTextClass = "w-[80%] text-[#333333] text-[1rem]";
const infoTitleClass = "text-secondary text-[1.1rem]";

const Contact = ({ containerClass, marginClass, contactData }) => {
  const { t } = useTranslation();

  return (
    <div className={`${marginClass} ${containerClass} mx-auto`}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[3rem]">
        {/* First Column */}
        <div className="flex flex-col justify-center">
          <Title title={t("contact_us")} />
          <h1 className="font-bold text-primary text-[2rem] mt-[1rem]">
            {t("contact_information")}
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-[2rem] gap-y-[2rem] mt-[1rem]">
            {/* Address */}
            <div className="flex flex-col">
              <h1 className={infoTitleClass}>{i18next.t("address")}</h1>
              <p className={infoTextClass}>{contactData?.data?.address}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <h1 className={infoTitleClass}>{i18next.t("phone")}</h1>
              <p className={infoTextClass}>{contactData?.data?.phone_1}</p>
              <p className={infoTextClass}>{contactData?.data?.phone_2}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <h1 className={infoTitleClass}>{i18next.t("email")}</h1>
              <p className={infoTextClass}>{contactData?.data?.website}</p>
              <p className={infoTextClass}>{contactData?.data?.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[22rem] mt-[2rem]">
            <iframe
              title="Google Map"
              src={contactData?.data?.location}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full h-auto border py-[4rem] lg:px-[3rem] px-[1rem] mt-[4rem] lg:mt-0 shadow-custom">
          <h1 className="text-[#002623] font-bold text-[2rem]">
            {t("contact")}
          </h1>

          <form className="mt-[1rem] space-y-[1.4rem]">
            <input className={inputClass} placeholder={t("your_name")} />
            <input className={inputClass} placeholder={t("email")} />
            <input className={inputClass} placeholder={t("subject")} />
            <textarea
              className={textareaClass}
              placeholder={t("write_your_message")}
            />
            <div className="flex justify-end">
              <Button title={i18next.t("send")} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
