import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";
import Footer from './../footer/component/footer';
import { useFetchFooter } from "../footer/hook/use_fetch_footer";
import { useFetchContactPage } from './../../features/contact/hook/use_fetch_contact_page';
import { useFetchServices } from './../../features/home/hook/use_fetch_services';
function Wrapper() {
  const {data:footerData , isLoading:footerDataLoading , error:footerDataError} = useFetchFooter();
  const {data:contactData , isLoading:contactDataLoading,error:contactDataError} = useFetchContactPage();
  const {data:servicesData , isLoading:servicesDataLoading , error:servicesDataError} = useFetchServices();
  return (
    <div className="size-full relative">
      {/* <ScrollToTop /> */}
       <div className="hidden lg:flex">
        <Navbar contactData = {contactData} servicesData = {servicesData}/>
      </div>
      <div className="lg:hidden md:block">
        <NavbarMobile servicesData = {servicesData}/> 
      </div>
      <Outlet />
      <Footer footerData={footerData} contactData = {contactData}/>
    </div>
  );
}
export default Wrapper;
