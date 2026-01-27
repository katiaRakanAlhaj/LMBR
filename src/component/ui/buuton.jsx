import i18next from "i18next";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

const Button = ({ title, showIcon = true, disabled = false }) => {
    return (
        <button
            disabled={disabled}
            className={`
    group
    w-[10rem] h-[3rem]
    bg-primary
    mt-[0.8rem]
    flex items-center justify-center gap-x-2
    transition-colors duration-300
    hover:bg-secondary
    ${disabled ? "opacity-70 cursor-not-allowed hover:bg-primary" : ""}
  `}
        >
            <p className="text-white text-[1.2rem]">
                {title}
            </p>

            {showIcon && i18next.language == "ar" ? (
                <span
                    className="
      text-white text-[1.4rem]
      transform
      transition-transform duration-300
      group-hover:-rotate-45
    "
                >
                    <GoArrowUpLeft />
                </span>
            ) : showIcon ? (
                <span
                    className="
      text-white text-[1.4rem]
      transform
      transition-transform duration-300
      group-hover:rotate-45
    "
                >
                    <GoArrowUpRight />
                </span>
            ) : null}
        </button>
    )
}
export default Button;