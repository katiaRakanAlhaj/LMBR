import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import GoalsFirstSection from "../../features/about/goals/component/goals_first_section";
import GoladImage from "../../features/about/goals/component/goals_image";
import GoalsSecondSection from "../../features/about/goals/component/goals_second_section";
import { useFetchGoals } from "../../features/about/goals/hook/use_fetch_goals";
import MetaHelmet from "../../component/meta/metaHelmet";
import Loader from "../../component/loader/loader";
import ErrorMessageNetwork from "../../component/errorMessage/errorMessage";

const Goals = () => {
  const {
    data: goalsData,
    isLoading: goalsDataLoading,
    error: goalsDataError,
  } = useFetchGoals();
  if (goalsDataLoading) {
    return <Loader />;
  }
  if (goalsDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <HelmetProvider>
        <MetaHelmet
          title={goalsData?.data?.meta_title}
          description={goalsData?.data?.meta_description}
        />
        <ScrollToTop />
        <GoladImage goalsData={goalsData} />
        <GoalsFirstSection goalsData={goalsData} />
        <GoalsSecondSection goalsData={goalsData} />
      </HelmetProvider>
    </div>
  );
};
export default Goals;
