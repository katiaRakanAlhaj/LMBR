import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Title from "../../../component/ui/title";
import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.jpg";
import project3 from "../../../assets/images/project3.jpg";
import project4 from "../../../assets/images/project4.jpg";
import { CgArrowLeft } from "react-icons/cg";
import DOMPurify from 'dompurify';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { GoArrowUpLeft, GoArrowUpRight } from 'react-icons/go';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

const Projects = ({homePageData}) => {
    const images = [
        {
            id: 1,
            image: project1,
            title: "مشروع سكني فاخر",
            date: "02/12/2025"
        },
        {
            id: 2,
            image: project2,
            title: "مركز تجاري حديث",
            date: "02/12/2025"
        },
        {
            id: 3,
            image: project3,
            title: "فيلات عائلية",
            date: "02/12/2025"
        },
        {
            id: 4,
            image: project4,
            title: "مشروع إداري",
            date: "02/12/2025"
        },
        {
            id: 5,
            image: project1,
            title: "مجمع سكني ريادي",
            date: "02/12/2025"
        },
        {
            id: 6,
            image: project2,
            title: "مشروع سياحي",
            date: "02/12/2025"
        },
        {
            id: 7,
            image: project3,
            title: "أبراج سكنية",
            date: "02/12/2025"
        },
        {
            id: 8,
            image: project4,
            title: "مركز طبي متخصص",
            date: "02/12/2025"
        },

    ];

    const swiperRef = useRef(null);

    // Handle mouse enter to stop autoplay
    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    // Handle mouse leave to resume autoplay
    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (
        <div className="h-[46rem] w-full bg-[#063252] lg:mt-[8rem] mt-[2rem]">
            <div className="flex flex-col justify-center items-center pt-[5rem]">
                <Title title={"مشاريعنا"} />
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(homePageData?.data?.projects_description)
                }} className="text-white text-[1.2rem] mt-2"/>

                <div className="mt-[4rem] container mx-auto w-full px-4 relative">
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
                                bulletClass: 'custom-bullet',
                                bulletActiveClass: 'custom-bullet-active',
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                            }}
                            className="w-full"
                        >
                            {images.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link to={`/project/${item.id}`}
                                    >
                                        <div className="lg:h-[25rem] h-[20rem] rounded-lg relative overflow-hidden group cursor-pointer">
                                            <img
                                                src={item.image}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                alt={`Project ${item.id}`}
                                            />

                                            {/* Always visible gradient (transparent) */}
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0) 100%)'
                                                }}
                                            ></div>

                                            {/* Hover gradient (with opacity) */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 50, 82, 0.85) 100%)'
                                                }}
                                            ></div>

                                            {/* Description container - Slides up from bottom on hover */}
                                            <div className="absolute px-[1.4rem] flex justify-between bottom-0 left-0 right-0 h-0 group-hover:h-[6rem] transition-all duration-500 ease-in-out overflow-hidden">
                                                <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                                                    <h3 className={`lg:text-[1.4rem] text-[1rem] font-bold mb-2 ${i18next.language == "ar" ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                                                    <p className={`lg:text-[1.1rem] text-[1rem] leading-relaxed ${i18next.language == "ar" ? 'text-right' : 'text-left'} opacity-90`}>{item.date}</p>

                                                </div>
                                                <div className='lg:w-[3rem] w-[2rem] lg:h-[3rem] h-[2rem] bg-secondary transform translate-y-full group-hover:translate-y-0 transition-transform flex justify-center items-center'>
                                                    <icon className="text-white lg:text-[1.5rem] text-[1rem]">
                                                        {i18next.language == "ar" ? <GoArrowUpLeft /> : <GoArrowUpRight />}
                                                    </icon>
                                                </div>
                                            </div>
                                        </div></Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Custom Pagination Container */}
                    <div className="custom-pagination mt-[2rem] !flex justify-center items-center"></div>

                    {/* Custom Navigation Buttons */}
                    <div
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                        className="flex justify-center items-center absolute -left-[3rem] cursor-pointer top-1/3 mt-[2rem] w-[2.5rem] h-[2.5rem] rounded-full bg-white"
                    >
                        <icon className="text-[1.5rem] text-primary">
                            <CgArrowLeft />
                        </icon>
                    </div>
                </div>
            </div>

            {/* Custom CSS for pagination */}
            <style jsx>{`
                .custom-pagination {
                    margin-top: 2rem !important;
                }
                
                .custom-bullet {
                    width: 12px;
                    height: 12px;
                    background-color: white;
                    border-radius: 50%;
                    margin: 0 6px !important;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .custom-bullet-active {
                    background-color: #f59e0b !important;
                    border-radius: 8px;import { DOMPurify } from 'dompurify';

                }
            `}</style>
        </div>
    );
};

export default Projects;