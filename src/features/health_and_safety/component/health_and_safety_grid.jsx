import SectionGrid from './../../../component/ui/section_grid';
const HealthAndSafetyGrid = ({HealthAndSafetyData}) => {
    return (
        <div>
            <SectionGrid image={HealthAndSafetyData?.data?.first_section_image} title={HealthAndSafetyData?.data?.first_section_title} description={HealthAndSafetyData?.data?.first_section_description} />
            <SectionGrid layout="column"  image={HealthAndSafetyData?.data?.second_section_image} description={HealthAndSafetyData?.data?.second_section_description} title={HealthAndSafetyData?.data?.second_section_title} />
            <SectionGrid reverse image={HealthAndSafetyData?.data?.third_section_image} description={HealthAndSafetyData?.data?.third_section_description} title={HealthAndSafetyData?.data?.third_section_title} />

        </div>
    )
}
export default HealthAndSafetyGrid;