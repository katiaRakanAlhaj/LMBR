import cer1 from "../../../assets/images/cer1.png";
import cer2 from "../../../assets/images/cer2.png";
import cer3 from "../../../assets/images/cer3.png";
import cer4 from "../../../assets/images/cer4.png";
import cer5 from "../../../assets/images/cer5.png";
import cer6 from "../../../assets/images/cer6.png";
const CertificateGrid = () => {
    const images = [cer1, cer2, cer3, cer4, cer5, cer6]
    return (
        <div className="container2 mx-auto mt-[5rem]">
            <div className="grid grid-cols-3 gap-[2rem]">
                {images?.map((img) => (
                    <img className="w-full h-[24rem] object-cover rounded-3xl" src={img} />
                ))}
            </div>
        </div>
    )
}
export default CertificateGrid;