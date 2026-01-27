import SectionGrid from "../../../component/ui/section_grid";
const SingleServiceGrid = ({singleServiceData})=> {
    return(
        <div>
             <SectionGrid image={singleServiceData?.first_section_image}  description={singleServiceData?.first_section_description} title={singleServiceData?.first_section_title} />
            <SectionGrid image={singleServiceData?.second_section_image} layout="column"   description={singleServiceData?.second_section_description} title={singleServiceData?.second_section_title} />
            <SectionGrid image={singleServiceData?.third_section_image} reverse  description={singleServiceData?.third_section_description} title={singleServiceData?.third_section_title} />
        </div>
    )
}
export default SingleServiceGrid;