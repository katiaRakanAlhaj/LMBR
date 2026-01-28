import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import ContactGrid from "../features/contact/component/contact_grid";
import ContactImage from "../features/contact/component/contact_image";
import { useFetchContactPage } from "../features/contact/hook/use_fetch_contact_page";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "./../component/meta/metaHelmet";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const Contact = () => {
  const {
    data: contactData,
    isLoading: contactDataLoading,
    error: contactDataError,
  } = useFetchContactPage();
  if (contactDataLoading) {
    return <Loader />;
  }
  if (contactDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={contactData?.data?.meta_title}
          description={contactData?.data?.meta_description}
        />
        <ContactImage contactData={contactData} />
        <ContactGrid contactData={contactData} />
      </HelmetProvider>
    </div>
  );
};
export default Contact;
