import About from "../features/home/component/about";
import Companies from "../features/home/component/companies";
import ImageHome from "../features/home/component/imageHome";
import Projects from "../features/home/component/projects";
import Services from "../features/home/component/services";
import { useFetchHomePage } from "../features/home/hook/use_fetch_home_page";
import { useFetchServices } from "../features/home/hook/use_fetch_services";
import { useFetchSlider } from "../features/home/hook/use_fetch_slider";
import Contact from './../features/home/component/contact';
import { useFetchAboutUs } from './../features/about/about_us/hook/use_fetch_about_us';
const Home = () => {
  const {data:homePageData , isLoading:homePageDataLoading , error:homePageDataError} = useFetchHomePage();
  const {data:sliderData , isLoading:sliderDataLoading , error:sliderDataError} = useFetchSlider();
  const {data:servicesData , isLoading:servicesDataLoading , error:servicesDataError} = useFetchServices();
  const {data:aboutData , isLoading:aboutDataLoading , error:aboutDataError} = useFetchAboutUs();
  return (
    <div>
      <ImageHome sliderData = {sliderData}/>
      <About aboutData = {aboutData}/>
      <Services homePageData = {homePageData} servicesData = {servicesData}/>
      <Projects homePageData = {homePageData}/>
      <Companies homePageData = {homePageData}/>
      <Contact marginClass="lg:mt-[6rem] mt-[2rem]" containerClass="container4" />
    </div>
  );
};

export default Home;
