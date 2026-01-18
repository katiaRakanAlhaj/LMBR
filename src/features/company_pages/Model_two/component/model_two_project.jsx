import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import i18next from "i18next";
import { Link } from "react-router-dom";

import porject1model1 from "../../../../assets/images/project1model2.png";
import porject2model1 from "../../../../assets/images/project2model2.png";
import porject3model1 from "../../../../assets/images/project3model2.png";
import porject4model1 from "../../../../assets/images/project4model2.png";
import porject5model1 from "../../../../assets/images/project5model2.png";
import porject6model1 from "../../../../assets/images/project6model2.png";
import porject7model1 from "../../../../assets/images/project1model2.png";
import porject8model1 from "../../../../assets/images/project2model2.png";
import porject9model1 from "../../../../assets/images/project3model2.png";
import porject10model1 from "../../../../assets/images/project4model2.png";
import porject11model1 from "../../../../assets/images/project5model2.png";
import porject12model1 from "../../../../assets/images/project6model2.png";
import porject13model1 from "../../../../assets/images/project1model2.png";
import porject14model1 from "../../../../assets/images/project2model2.png";
import porject15model1 from "../../../../assets/images/project3model2.png";
import porject16model1 from "../../../../assets/images/project4model2.png";

const ModelTwoProjects = () => {
    const items = [
        { id: 1, image: porject1model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 2, image: porject2model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 3, image: porject3model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 4, image: porject4model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 5, image: porject5model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 6, image: porject6model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 7, image: porject7model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 8, image: porject8model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 9, image: porject9model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 10, image: porject10model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 11, image: porject11model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 12, image: porject12model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 13, image: porject13model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 14, image: porject14model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 15, image: porject15model1, title: "لوريم ابسيم", date: "02/12/2025" },
        { id: 16, image: porject16model1, title: "لوريم ابسيم", date: "02/12/2025" },
    ];

    return (
        <div className="container2 mx-auto mt-[6rem]">
            {/* Title */}
            <div className="flex gap-x-4 items-center">
                <div className="w-[0.8rem] h-[2.8rem] bg-[#9A5734]" />
                <p className="font-bold text-[#333333] text-[1.5rem] mt-2">مشاريعنا</p>
            </div>


            {/* Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[3rem] gap-[2rem] mt-[2rem]">
                {items.map((item) => (
                    <Link to={`/project/${item.id}`} key={item.id}>
                        <div className="h-[21rem] rounded-3xl relative overflow-hidden group cursor-pointer">
                            {/* Image */}
                            <img
                                src={item.image}
                                className="w-full h-full object-cover"
                                alt={item.title}
                            />

                            {/* Base gradient */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0) 100%)",
                                }}
                            />

                            {/* Hover gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0.85) 100%)",
                                }}
                            />

                            {/* Content */}
                            <div className="absolute px-[1.4rem] flex justify-between bottom-0 left-0 right-0 h-0 group-hover:h-[6rem] transition-all duration-300 overflow-hidden">
                                <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                                    <h3
                                        className={`text-[1.3rem] font-bold mb-1 ${i18next.language === "ar" ? "text-right" : "text-left"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`text-[1.05rem] opacity-90 ${i18next.language === "ar" ? "text-right" : "text-left"
                                            }`}
                                    >
                                        {item.date}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="w-[3rem] h-[3rem] bg-secondary transform translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center">
                                    <span className="text-white text-[1.5rem]">
                                        {i18next.language === "ar" ? <GoArrowUpLeft /> : <GoArrowUpRight />}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ModelTwoProjects;
