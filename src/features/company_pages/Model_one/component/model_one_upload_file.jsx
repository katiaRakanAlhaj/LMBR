import i18next from "i18next";
import upload1 from "../../../../assets/images/uploadone.png";
import upload2 from "../../../../assets/images/uploadtwo.png";
import { useTranslation } from 'react-i18next';
const ModelOneUploadFile = () => {
    const {t} = useTranslation();
    return (
       <div className="fixed -mt-[4rem]">
         <div className="container2 mx-auto mt-[-7rem] relative">
            <div className="w-[23rem]  h-[3.8rem] relative bg-[#063252E5] rounded-full flex justify-center items-center">
                <p className="text-white font-bold text-[1rem]">
                    {t("Download Company Profile")}
                </p>
                <img className={`absolute ${i18next.language == "ar"?'left-[1.5rem]':'right-[1.5rem]'} w-[1.5rem]`} src={upload2}/>
            </div>
            <div className={`absolute w-[6rem] h-[6rem] rounded-full flex justify-center items-center bg-[#CA3535] top-[-1.4rem] ${i18next.language == "ar"?'-right-[1rem]':'-left-[1rem]'}`}>
                <img className="w-[3rem]" src = {upload1}/>
            </div>
        </div>
       </div>
    )
}
export default ModelOneUploadFile;