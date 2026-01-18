import cer1 from "../../../assets/images/cer1.png";
import cer2 from "../../../assets/images/cer2.png";
import cer3 from "../../../assets/images/cer3.png";
import cer4 from "../../../assets/images/cer4.png";
import cer5 from "../../../assets/images/cer5.png";
import cer6 from "../../../assets/images/cer6.png";
const CertificateGrid = () => {
    const images = [cer1, cer2, cer3, cer4, cer5, cer6]
    return (
        <div className="container2 mx-auto lg:mt-[5rem] mt-[3rem]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-[2rem]">
                {images?.map((img) => (
                    <img className="w-full lg:h-[24rem] h-[20rem] object-cover rounded-3xl" src={img} />
                ))}
            </div>
        </div>
    )
}
export default CertificateGrid;