import Contact from "../../home/component/contact";

const ContactGrid = ({contactData})=> {
    return(
        <div>
         <Contact marginClass="mt-[4rem]" containerClass="container4" contactData = {contactData} />
        </div>
    )
}
export default ContactGrid;