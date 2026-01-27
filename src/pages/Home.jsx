import About from "../features/home/component/about";
import ImageHome from "../features/home/component/imageHome";
import Projects from "../features/home/component/projects";
import Services from "../features/home/component/services";
import { useFetchHomePage } from "../features/home/hook/use_fetch_home_page";
import { useFetchServices } from "../features/home/hook/use_fetch_services";
import { useFetchSlider } from "../features/home/hook/use_fetch_slider";
import Contact from "./../features/home/component/contact";
import { useFetchAboutUs } from "./../features/about/about_us/hook/use_fetch_about_us";
import { useFetchContactPage } from "../features/contact/hook/use_fetch_contact_page";
import Partners from "../features/home/component/partners";
import { useFetchProjects } from "../features/home/hook/use_fetch_projects";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
const Home = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  const {
    data: sliderData,
    isLoading: sliderDataLoading,
    error: sliderDataError,
  } = useFetchSlider();
  const {
    data: servicesData,
    isLoading: servicesDataLoading,
    error: servicesDataError,
  } = useFetchServices();
  const {
    data: aboutData,
    isLoading: aboutDataLoading,
    error: aboutDataError,
  } = useFetchAboutUs();
  const {
    data: contactData,
    isLoading: contactDataLoading,
    error: contactDataError,
  } = useFetchContactPage();
  const {
    data: projectsData,
    isLoading: projectsDataLoading,
    error: projectsDataError,
  } = useFetchProjects();
  return (
    <div>
      <ScrollToTop/>
      <ImageHome sliderData={sliderData} />
      <About aboutData={aboutData} />
      <Services homePageData={homePageData} servicesData={servicesData} />
      <Projects homePageData={homePageData} projectsData = {projectsData}/>
      <Partners homePageData={homePageData} />
      <Contact
        contactData={contactData}
        marginClass="lg:mt-[6rem] mt-[2rem]"
        containerClass="container4"
      />
    </div>
  );
};
export default Home;
