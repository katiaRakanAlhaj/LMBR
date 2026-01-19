import Banner from './../../../../component/Banner/Banner';
const AboutImage = ({aboutData})=> {
    return(
        <div>
            <Banner title={aboutData?.data?.title} image={aboutData?.data?.image}/>
        </div>
    )
}
export default AboutImage;