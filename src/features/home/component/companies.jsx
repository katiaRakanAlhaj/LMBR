import Title from "../../../component/ui/title";
import company1 from "../../../assets/images/company1.png";
import company2 from "../../../assets/images/company2.png";
import company3 from "../../../assets/images/company3.png";
import DOMPurify from 'dompurify';
const Companies = ({ homePageData }) => {
    const comp = [company1, company2, company3]
    return (
        <div className="mt-[4rem]">
            <div className="flex items-center justify-center flex-col text-center">
                <Title title={"شركائنا"} />
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(homePageData?.data?.companies_description)
                }} className="text-[1.2rem] text-[#333333] lg:w-[50%] mt-[0.8rem]" />
                <div className="container3 mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-y-0  md:mt-0 mt-[2rem] gap-x-[2rem]">
                        {comp?.map((comp) => (
                            <img className="w-full h-[8rem] object-contain" src={comp} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Companies;