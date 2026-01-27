import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import CertificateGrid from "../features/certificates/component/certificate_grid";
import CertificateImage from "../features/certificates/component/certificate_image";
import { useFetchCertificates } from "../features/certificates/hook/use_fetch_certificate";

const Certificates = ()=> {
    const {data:certificatesData , isLoading:certificatesDataLoading , error:certificatesDataError} = useFetchCertificates();
    return(
        <div>
            <ScrollToTop/>
            <CertificateImage certificatesData = {certificatesData}/>
            <CertificateGrid certificatesData = {certificatesData}/>
        </div>
    )
}
export default Certificates;