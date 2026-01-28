import { useParams } from "react-router-dom";
import SingleProjectGrid from "../features/single_project/compnent/single_project_grid";
import SingleProjectImage from "../features/single_project/compnent/single_project_image";
import { useFetchSingleProject } from "../features/single_project/hook/use_fetch_single_project";
import { useFetchProjects } from "./../features/home/hook/use_fetch_projects";
import ScrollToTop from "./../component/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "./../component/meta/metaHelmet";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const SingleProject = () => {
  const { id } = useParams(); // 👈 get id from URL
  const {
    data: singleProjectData,
    isLoading: singleProjectDataLoading,
    error: singleProjectDataError,
  } = useFetchSingleProject(id);
  const {
    data: projectsData,
    isLoading: projectsDataLoading,
    error: projectsDataError,
  } = useFetchProjects();
  if (singleProjectDataLoading || projectsDataLoading) {
    return <Loader />;
  }
  if (singleProjectDataError || projectsDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={singleProjectData?.name}
          description={singleProjectData?.name}
        />
        <SingleProjectImage singleProjectData={singleProjectData} />
        <SingleProjectGrid
          projectsData={projectsData}
          singleProjectData={singleProjectData}
        />
      </HelmetProvider>
    </div>
  );
};
export default SingleProject;
