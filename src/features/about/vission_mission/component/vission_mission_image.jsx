import Banner from "../../../../component/Banner/Banner";
const VissionAndMissionImage = ({vissionData})=> {
    return(
        <div>
            <Banner image={vissionData?.data?.banner} title={"الرؤية والمهمة"}/>
        </div>
    )
}
export default VissionAndMissionImage;