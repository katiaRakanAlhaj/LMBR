import SectionGrid from "../../../component/ui/section_grid";

const SingleServiceGrid = ({ singleServiceData }) => {
  // Check if sections exist
  if (!singleServiceData?.sections || singleServiceData.sections.length === 0) {
    return null;
  }

  return (
    <div>
      {singleServiceData.sections.map((section, index) => {
        // Determine layout based on index
        let layout = "grid";
        let reverse = false;

        // You can customize this logic as needed:
        // Option 1: Simple alternating pattern
        // reverse = index % 2 === 1;
        
        // Option 2: Specific layouts for first few sections (like original)
        if (index === 0) {
          // First section - default grid layout
          layout = "grid";
          reverse = false;
        } else if (index === 1) {
          // Second section - column layout
          layout = "column";
          reverse = false;
        } else if (index === 2) {
          // Third section - reversed grid layout
          layout = "grid";
          reverse = true;
        } else {
          // For remaining sections, alternate between normal and reversed
          reverse = index % 2 === 0;
        }

        return (
          <SectionGrid
            key={index}
            image={section?.image}
            layout={layout}
            reverse={reverse}
            description={section?.description}
            title={section?.title}
          />
        );
      })}
    </div>
  );
};

export default SingleServiceGrid;