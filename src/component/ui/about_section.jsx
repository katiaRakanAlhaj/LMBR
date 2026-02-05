import DOMPurify from "dompurify";
import { useState, useRef, useEffect } from "react";
import i18n from "../../i18n";

const AboutSection = ({
  image,
  title,
  description,
  barColor = "#000",
  barWidth = "1rem",
  barHeight = "3rem",
  gap = "gap-x-4",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef(null);
  const lineHeight = 24; // Approximate line height in pixels for 1.2rem text
  
  useEffect(() => {
    if (descriptionRef.current) {
      // Calculate if the content exceeds 13 lines
      const contentHeight = descriptionRef.current.scrollHeight;
      const maxHeight = lineHeight * 13; // 13 lines height
      setShowReadMore(contentHeight > maxHeight);
    }
  }, [description]);

  // Function to truncate HTML content to approximately 13 lines
  const truncateHtml = (html, maxLines = 13) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    const text = tempDiv.textContent || tempDiv.innerText || '';
    const words = text.split(' ');
    const avgWordsPerLine = 8; // Approximate words per line
    const maxWords = avgWordsPerLine * maxLines;
    
    if (words.length <= maxWords) return html;
    
    // Truncate to approximate number of lines
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');
    
    // Return truncated text with ellipsis
    return truncatedText + '...';
  };

  const sanitizedDescription = DOMPurify.sanitize(description);
  const truncatedDescription = truncateHtml(sanitizedDescription);
  const displayDescription = isExpanded || !showReadMore ? sanitizedDescription : truncatedDescription;

  return (
    <div className="container7 mx-auto lg:mt-[-1rem] mt-[-2rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem]">
        {/* Image column */}
        <div className="lg:col-span-5 col-span-1">
          <img
            className="w-full lg:h-[28rem] h-[20rem] object-cover"
            src={image}
            alt={title}
          />
        </div>

        {/* Content column */}
        <div className="lg:col-span-7 col-span-full flex flex-col justify-center">
          <div className={`flex items-center ${gap}`}>
            <div
              style={{
                width: barWidth,
                height: barHeight,
                backgroundColor: barColor,
              }}
            />
            <p className="font-bold text-[#333333] text-[1.5rem] mt-2">
              {title}
            </p>
          </div>

          <div
            ref={descriptionRef}
            dangerouslySetInnerHTML={{
              __html: displayDescription,
            }}
            className={`text-[#333333] leading-relaxed mt-3 text-[1.2rem] ${
              !isExpanded && showReadMore ? 'line-clamp-13' : ''
            }`}
            style={{
              maxHeight: !isExpanded && showReadMore ? `${lineHeight * 13}px` : 'none',
              overflow: 'hidden',
            }}
          />
          
          {showReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-primary text-[1.1rem] font-medium transition-colors duration-200 self-start"
            >
              {isExpanded ? i18n.t("show_less") : i18n.t("show_more")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;