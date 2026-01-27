import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import upload1 from "../../../../assets/images/uploadone.png";
import upload2 from "../../../../assets/images/uploadtwo.png";
import i18n from "../../../../i18n";

const ModelOneUploadFile = ({ singleCompanyData }) => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    
    if (!singleCompanyData?.company_file || isDownloading) {
      return;
    }

    setIsDownloading(true);

    try {
      // Fetch the file
      const response = await fetch(singleCompanyData.company_file);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob data
      const blob = await response.blob();
      
      // Create object URL from blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      
      // Set the filename
      const urlParts = singleCompanyData.company_file.split('/').pop();
      const fileNameParts = urlParts.split('.');
      const extension = fileNameParts.length > 1 ? fileNameParts.pop() : 'pdf';
      const fileName = `${singleCompanyData.name || 'company'}_profile.${extension}`;
      
      link.download = fileName;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      window.URL.revokeObjectURL(blobUrl);
      
    } catch (error) {
      // Fallback - open in same window if fetch fails
      window.location.href = singleCompanyData.company_file;
    } finally {
      // Reset loading state after a short delay
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!singleCompanyData?.company_file || isDownloading}
      className={`fixed bottom-6 ${i18n.language == "ar" ? 'lg:right-[5rem] right-[1rem]' : 'lg:left-[5rem] left-[1rem]'} z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed`}
      aria-label={isDownloading ? t("Downloading the file") : t("Download Company Profile")}
    >
      <div className="relative md:w-[23rem] w-[20rem] md:h-[3.8rem] h-[3rem] bg-[#063252E5] rounded-full flex justify-center items-center hover:bg-[#063252] transition-colors duration-200">
        {isDownloading ? (
          <div className="flex items-center justify-center gap-2">
            {/* Loading spinner */}
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white font-bold md:text-[1rem] text-[0.8rem]">
              {t("Downloading the file")}
            </p>
          </div>
        ) : (
          <>
            <p className="text-white font-bold md:text-[1rem] text-[0.8rem]">
              {t("Download Company Profile")}
            </p>
            <img 
              className={`absolute top-1/2 -translate-y-1/2 ${i18next.language === "ar" ? "left-[1.5rem]" : "right-[1.5rem]"} w-[1.5rem]`} 
              src={upload2} 
              alt="upload icon"
            />
          </>
        )}
      </div>
      
      {/* Decorative circle */}
      <div className={`absolute md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] rounded-full bg-[#CA3535] flex justify-center items-center md:-top-[1.5rem] -top-[1.3rem] ${i18next.language === "ar" ? "-right-[1rem]" : "-left-[1rem]"}`}>
        <img className="w-[3rem]" src={upload1} alt="decorative circle" />
      </div>
    </button>
  );
};

export default ModelOneUploadFile;