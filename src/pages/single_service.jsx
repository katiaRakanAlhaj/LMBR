import { useParams } from "react-router-dom";
import SingleServiceGrid from "../features/single_service/component/single_service_grid";
import SingleServiceImage from "../features/single_service/component/single_service_image";
import { useFetchSingleService } from "../features/single_service/hook/use_fetch_single_service";
import ScrollToTop from './../component/ScrollToTop/ScrollToTop';

const SingleService = () => {
  const { id } = useParams(); // 👈 get id from URL
  const {
    data: singleServiceData,
    isLoading: singleServiceDataLoading,
    error: singleServiceDataError,
  } = useFetchSingleService(id);
  return (
    <div>
      <ScrollToTop/>
      <SingleServiceImage singleServiceData = {singleServiceData} />
      <SingleServiceGrid singleServiceData = {singleServiceData}/>
    </div>
  );
};
export default SingleService;
