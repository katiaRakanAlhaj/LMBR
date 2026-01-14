import timer from "../../../../assets/images/timer.png";
import number from "../../../../assets/images/number.png";
import certificate from "../../../../assets/images/certificate.png";
import EmploymentSection from "../../../../component/ui/employment_section";

const ModelThreeEmployment = () => {
  const items = [
    {
      image: timer,
      title: "4,500+",
      descKey: "Number of working hours",
    },
    {
      image: number,
      title: "100+",
      descKey: "Number of employees",
    },
    {
      image: certificate,
      title: "15",
      descKey: "Number of certificates of appreciation",
    },
  ];

  return <EmploymentSection items={items} />;
};

export default ModelThreeEmployment;
