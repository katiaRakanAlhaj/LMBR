import Banner from './../../../component/Banner/Banner';
const SingleServiceImage = ({singleServiceData})=> {
    return(
        <div>
            <Banner image={singleServiceData?.banner} title={singleServiceData?.title}/>
        </div>
    )
}
export default SingleServiceImage;