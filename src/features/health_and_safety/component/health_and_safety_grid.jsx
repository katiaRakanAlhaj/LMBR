import SectionGrid from "./../../../component/ui/section_grid";

const HealthAndSafetyGrid = ({ HealthAndSafetyData }) => {
  // Helper function to check if a section should be shown
  const shouldShowSection = (sectionPrefix) => {
    const data = HealthAndSafetyData?.data;
    if (!data) return false;

    const image = data[`${sectionPrefix}_image`];
    const title = data[`${sectionPrefix}_title`];
    const description = data[`${sectionPrefix}_description`];

    // Check if image is a valid URL (not just a directory path)
    const hasValidImage =
      image &&
      image.trim() !== "" &&
      // Check if URL looks like an actual image, not just a directory
      !image.endsWith("/") &&
      !image.endsWith("/image/") &&
      !image.endsWith("/storage/public/image/");

    const hasTitle = title && title.trim() !== "";
    const hasDescription = description && description.trim() !== "";

    return hasValidImage || hasTitle || hasDescription;
  };

  const data = HealthAndSafetyData?.data || {};

  return (
    <div>
      {/* First Section */}
      {shouldShowSection("first_section") && (
        <SectionGrid
          image={data.first_section_image}
          title={data.first_section_title}
          description={data.first_section_description}
        />
      )}

      {/* Second Section */}
      {shouldShowSection("second_section") && (
        <SectionGrid
          layout="column"
          image={data.second_section_image}
          description={data.second_section_description}
          title={data.second_section_title}
        />
      )}

      {/* Third Section */}
      {shouldShowSection("third_section") && (
        <SectionGrid
          reverse
          image={data.third_section_image}
          description={data.third_section_description}
          title={data.third_section_title}
        />
      )}
    </div>
  );
};

export default HealthAndSafetyGrid;
