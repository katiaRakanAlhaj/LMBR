import ModelThreeTitle from "../../../../component/ui/model_three_title";
import DOMPurify from 'dompurify';
import i18n from "../../../../i18n";
import { useState, useRef, useEffect } from "react";

const ModelThreeAbout = ({ singleCompanyData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef(null);
  const lineHeight = 24;
  
  useEffect(() => {
    if (descriptionRef.current) {
      const contentHeight = descriptionRef.current.scrollHeight;
      const maxHeight = lineHeight * 13;
      setShowReadMore(contentHeight > maxHeight);
    }
  }, [singleCompanyData?.about_description]);

  const truncateHtml = (html, maxLines = 13) => {
    if (!html) return '';
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    const text = tempDiv.textContent || tempDiv.innerText || '';
    const words = text.split(' ');
    const avgWordsPerLine = 8;
    const maxWords = avgWordsPerLine * maxLines;
    
    if (words.length <= maxWords) return html;
    
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    
    return truncatedText + '...';
  };

  const sanitizedDescription = DOMPurify.sanitize(singleCompanyData?.about_description || '');
  const truncatedDescription = truncateHtml(sanitizedDescription);
  const displayDescription = isExpanded || !showReadMore ? sanitizedDescription : truncatedDescription;

  // Check if current language is Arabic
  const isArabic = i18n.language === 'ar';
  
  return (
    <div className={`container7 mx-auto mt-[8rem] ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem]">
        {/* Image column - optional RTL column swapping */}
        <div className={`lg:col-span-4 col-span-full ${isArabic ? 'lg:order-2' : ''}`}>
          <div className="lg:h-[28rem] h-[20rem] flex justify-center items-center w-full rounded-tr-2xl rounded-b-2xl rounded-tl-[8rem] bg-[linear-gradient(#E5AC62_0%,_#7F5F36_100%)]">
            <img
              className="w-full lg:h-[28rem] h-[15rem] object-cover"
              src={singleCompanyData?.about_image}
              alt={i18n.t("About the Company")}
            />
          </div>
        </div>
        
        {/* Content column */}
        <div className={`lg:col-span-8 col-span-full flex flex-col justify-center ${isArabic ? 'lg:order-1 text-right' : 'text-left'}`}>
          <ModelThreeTitle title={i18n.t("About the Company")} />
          
          <div
            ref={descriptionRef}
            dangerouslySetInnerHTML={{
              __html: displayDescription,
            }}
            className={`text-[#333333] leading-relaxed mt-3 text-[1.2rem] ${
              !isExpanded && showReadMore ? 'line-clamp-13' : ''
            } ${isArabic ? 'text-right' : 'text-left'}`}
            style={{
              maxHeight: !isExpanded && showReadMore ? `${lineHeight * 13}px` : 'none',
              overflow: 'hidden',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          />
          
          {showReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 text-primary text-[1.1rem] font-medium transition-colors duration-200 self-start`}
            >
              {isExpanded ? i18n.t('show_less') : i18n.t('show_more')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelThreeAbout;