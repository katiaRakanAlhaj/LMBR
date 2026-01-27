import { useParams } from "react-router-dom";
import SingleProjectGrid from "../features/single_project/compnent/single_project_grid";
import SingleProjectImage from "../features/single_project/compnent/single_project_image";
import { useFetchSingleProject } from "../features/single_project/hook/use_fetch_single_project";
import { useFetchProjects } from './../features/home/hook/use_fetch_projects';
import ScrollToTop from './../component/ScrollToTop/ScrollToTop';

const SingleProject = () => {
  const { id } = useParams(); // 👈 get id from URL
  const {
    data: singleProjectData,
    isLoading: singleProjectDataLoading,
    error: singleProjectDataError,
  } = useFetchSingleProject(id);
  const {data:projectsData,isLoading:projectsDataLoading, error:projectsDataError} = useFetchProjects();
  return (
    <div>
      <ScrollToTop/>
      <SingleProjectImage singleProjectData = {singleProjectData}/>
      <SingleProjectGrid projectsData = {projectsData} singleProjectData = {singleProjectData}/>
    </div>
  );
};
export default SingleProject;
