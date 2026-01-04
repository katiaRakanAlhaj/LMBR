import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import HomeImage from "../../../../src/assets/images/imageHome.jpg";
import project1 from "../../../../src/assets/images/project1.jpg";
import project2 from "../../../../src/assets/images/project2.jpg";
import project3 from "../../../../src/assets/images/project3.jpg";

const ImageHome = () => {
    // Array of images with descriptions
    const sliderImages = [
        { image: HomeImage, title: 'لوريم ايبسوم دولار', description: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابورياني" },
        { image: project1, title: 'لوريم ايبسوم دولار', description: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوتي" },
        { image: project2, title: 'لوريم ايبسوم دولار', description: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوتي" },
        { image: project3, title: 'لوريم ايبسوم دولار', description: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوتي" }
    ];

    return (
        <div>
            <div className="w-full h-[100vh] relative">
                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // توقف عند التمرير لإظهار الوصف
                    }}
                    loop={true}
                    speed={1000}
                    className="w-full h-full"
                    pagination={false}
                    navigation={false}
                >
                    {sliderImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* Background Image Container */}
                            <div className="relative w-full h-full group">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(360deg, #001037 0%, rgba(0, 16, 55, 0) 100%)"
                                    }}
                                />

                                {/* Description Overlay - يظهر عند التمرير */}
                                <div className="absolute inset-0 flex items-center justify-center -bottom-[9rem] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    {/* Dark Overlay للخلفية */}
                                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-100 opacity-0"></div>

                                    {/* Description Container */}
                                    <div className="relative z-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                                        <div className="p-8 rounded-lg max-w-2xl mx-4">
                                            <p className="text-[#E7792D] font-bold text-[2rem] text-center leading-relaxed">
                                                {item.title}
                                            </p>
                                            <p className="text-white text-xl md:text-2xl lg:text-[1.2rem] text-center leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ImageHome;