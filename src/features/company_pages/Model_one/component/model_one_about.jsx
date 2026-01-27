import AboutSection from "../../../../component/ui/about_section";
import i18n from "../../../../i18n";

const ModelOneAbout = ({ singleCompanyData }) => {
  return (
    <AboutSection
      image={singleCompanyData?.about_image}
      title={i18n.t("About the Company")}
      barColor="#099EC8"
      barWidth="2rem"
      barHeight="1rem"
      gap="gap-x-2"
      description={singleCompanyData?.about_description}
    />
  );
};

export default ModelOneAbout;
