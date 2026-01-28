import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import CertificateGrid from "../features/certificates/component/certificate_grid";
import CertificateImage from "../features/certificates/component/certificate_image";
import { useFetchCertificates } from "../features/certificates/hook/use_fetch_certificate";
import MetaHelmet from "../component/meta/metaHelmet";
import Loader from "./../component/loader/loader";
import ErrorMessageNetwork from "./../component/errorMessage/errorMessage";

const Certificates = () => {
  const {
    data: certificatesData,
    isLoading: certificatesDataLoading,
    error: certificatesDataError,
  } = useFetchCertificates();
  if (certificatesDataLoading) {
    return <Loader />;
  }
  if (certificatesDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <HelmetProvider>
        <MetaHelmet
          title={certificatesData?.data?.meta_title}
          description={certificatesData?.data?.meta_description}
        />
        <ScrollToTop />
        <CertificateImage certificatesData={certificatesData} />
        <CertificateGrid certificatesData={certificatesData} />
      </HelmetProvider>
    </div>
  );
};
export default Certificates;
