import i18next from "i18next";
import Button from "../../../component/ui/buuton";
import Title from "../../../component/ui/title";
import { useTranslation } from "react-i18next";
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="mt-[6rem] container4 mx-auto">
            <div className="grid grid-cols-2 gap-x-[2rem]">
                {/* first column */}
                <div className="flex flex-col justify-center">
                    <Title title={t("contact_us")} />
                    <h1 className="font-bold text-primary text-[2rem] mt-[1rem]">{t("contact_information")}</h1>
                    <div className="grid grid-cols-3 gap-x-[2rem] mt-[1rem]">
                        <div className= "flex flex-col">
                            <h1 className="text-secondary text-[1.1rem]">{i18next.t("address")}</h1>
                            <p className="w-[80%] text-[#333333] text-[1rem]">العراق - بغداد المنصور -حي المتنبي</p>
</div>
             <div className="flex flex-col">
                            <h1 className="text-secondary text-[1.1rem]">{i18next.t("phone")}</h1>
                            <p className="w-[80%] text-[#333333] text-[1rem]">009647901949502</p>
                            <p className="w-[80%] text-[#333333] text-[1rem]">009647901949503</p>
</div>
             <div className="flex flex-col">
                            <h1 className="text-secondary text-[1.1rem]">{i18next.t("email")}</h1>
                            <p className="w-[80%] text-[#333333] text-[1rem]">info@lmbrgroup.com</p>
                              <p className="w-[80%] text-[#333333] text-[1rem]">Info.Lmbrgroup@gmail.com</p>
</div>
                 </div>
                     <div style={{ width: "100%", height: "22rem"}}>
      <iframe
      className="mt-[2rem]"
        title="Google Map"
        src="https://www.google.com/maps?q=New+York&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
                 </div>
                         {/*second column */}
                <div  style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-auto border py-[4rem] px-[3rem]">
                    <h1 className="text-[#002623] font-bold text-[2rem]">{t("contact")}</h1>
               <form className="mt-[1rem] space-y-[1.4rem]">
                        <input style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-[3.7rem] rounded-sm border outline-none px-4" placeholder={t('your_name')} />
                        <input style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-[3.7rem] rounded-sm border outline-none px-4" placeholder={t('email')} />
                        <input style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-[3.7rem] rounded-sm border outline-none px-4" placeholder={t('subject')} />
                        <textarea style={{ boxShadow: '0px 0px 4px 0px #00000040' }} className="w-full h-[10rem] rounded-sm border outline-none p-[1rem]" placeholder={t('write_your_message')} />
                        <div className="flex justify-end">
                            <Button title={i18next.t("send")}/>
                        </div>  
                    </form>
                </div>   
            </div > 
        </div > 
    ) 
} 
    export default Contact;