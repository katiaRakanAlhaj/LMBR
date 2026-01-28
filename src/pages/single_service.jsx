import { useParams } from "react-router-dom";
import SingleServiceGrid from "../features/single_service/component/single_service_grid";
import SingleServiceImage from "../features/single_service/component/single_service_image";
import { useFetchSingleService } from "../features/single_service/hook/use_fetch_single_service";
import ScrollToTop from "./../component/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "./../component/meta/metaHelmet";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const SingleService = () => {
  const { id } = useParams(); // 👈 get id from URL
  const {
    data: singleServiceData,
    isLoading: singleServiceDataLoading,
    error: singleServiceDataError,
  } = useFetchSingleService(id);
  if (singleServiceDataLoading) {
    return <Loader />;
  }
  if (singleServiceDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={singleServiceData?.title}
          description={singleServiceData?.title}
        />
        <SingleServiceImage singleServiceData={singleServiceData} />
        <SingleServiceGrid singleServiceData={singleServiceData} />
      </HelmetProvider>
    </div>
  );
};
export default SingleService;
