import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import ContactGrid from "../features/contact/component/contact_grid";
import ContactImage from "../features/contact/component/contact_image";
import { useFetchContactPage } from "../features/contact/hook/use_fetch_contact_page";

const Contact = ()=> {
    const {data:contactData , isLoading:contactDataLoading , error:contactDataError} = useFetchContactPage();
    return(
        <div>
            <ScrollToTop/>
            <ContactImage contactData = {contactData}/>
            <ContactGrid contactData = {contactData}/>
        </div>
    )
}
export default Contact;