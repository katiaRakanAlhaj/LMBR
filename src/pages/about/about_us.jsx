import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import AboutFirstSection from "../../features/about/about_us/component/about_first_section";
import AboutFourthSection from "../../features/about/about_us/component/about_fourth_section";
import AboutImage from "../../features/about/about_us/component/about_image";
import AboutSecondSection from "../../features/about/about_us/component/about_second_section";
import AboutThirdSection from "../../features/about/about_us/component/about_third_section";
import { useFetchAboutUs } from "../../features/about/about_us/hook/use_fetch_about_us";
import { useFetchSolutions } from "../../features/about/about_us/hook/use_fetch_solution";
import MetaHelmet from "../../component/meta/metaHelmet";
import Loader from "./../../component/loader/loader";
import ErrorMessageNetwork from "../../component/errorMessage/errorMessage";

const AboutUs = () => {
  const {
    data: aboutData,
    isLoading: aboutDataLoading,
    error: aboutDataError,
  } = useFetchAboutUs();
  const {
    data: solutionData,
    isLoading: solutionDataLoading,
    error: solutionDataError,
  } = useFetchSolutions();
  const combinedLoading = aboutDataLoading || solutionDataLoading;
  const combinedError = aboutDataError || solutionDataError;
  if (combinedLoading) {
    return <Loader />;
  }
  if (combinedError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={aboutData?.data?.meta_title}
          description={aboutData?.data?.meta_description}
        />
        <AboutImage aboutData={aboutData} />
        <AboutFirstSection aboutData={aboutData} />
        <AboutSecondSection aboutData={aboutData} />
        <AboutThirdSection aboutData={aboutData} solutionData={solutionData} />
        <AboutFourthSection aboutData={aboutData} />
      </HelmetProvider>
    </div>
  );
};
export default AboutUs;
