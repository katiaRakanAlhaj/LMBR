import AboutSection from "../../../../component/ui/about_section";
const ModelTwoAbout = ({singleCompanyData}) => {
  return (
    <AboutSection
      image={singleCompanyData?.about_image}
      title="حول الشركة"
      barColor="#9A5734"
      barWidth="0.8rem"
      barHeight="2.8rem"
      gap="gap-x-4"
      description={
        singleCompanyData?.about_description
      }
    />
  );
};

export default ModelTwoAbout;
