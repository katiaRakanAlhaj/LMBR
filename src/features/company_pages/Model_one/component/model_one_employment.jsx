import timer from "../../../../assets/images/timer.png";
import number from "../../../../assets/images/number.png";
import certificate from "../../../../assets/images/certificate.png";
import EmploymentSection from "../../../../component/ui/employment_section";

const ModelOneEmployment = ({singleCompanyData}) => {
  const items = [
    {
      image: timer,
      title: singleCompanyData?.work_hour_number,
      descKey: "Number of working hours",
    },
    {
      image: number,
      title: singleCompanyData?.employees_number,
      descKey: "Number of employees",
    },
    {
      image: certificate,
      title: singleCompanyData?.certificates_number,
      descKey: "Number of certificates of appreciation",
    },
  ];

  return <EmploymentSection items={items} />;
};

export default ModelOneEmployment;
