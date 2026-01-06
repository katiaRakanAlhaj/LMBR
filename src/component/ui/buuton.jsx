import i18next from "i18next";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

const Button = ({ title }) => {
    return (
        <button
            className="
    group
    w-[10rem] h-[3rem]
    bg-primary
    mt-[0.8rem]
    flex items-center justify-center gap-x-2
    transition-colors duration-300
    hover:bg-secondary
  "
        >
            <p className="text-white text-[1.2rem]">
                {title}
            </p>

            {i18next.language == "ar" ? (
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
            ) : (
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
            )}
        </button>
    )
}
export default Button;