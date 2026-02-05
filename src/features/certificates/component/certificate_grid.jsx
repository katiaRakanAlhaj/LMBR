const CertificateGrid = ({certificatesData}) => {
    return (
        <div className="container2 mx-auto lg:mt-[5rem] mt-[3rem]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-[2rem]">
                {certificatesData?.data?.images?.map((img) => (
                    <img className="w-full lg:h-[27rem] h-[20rem] bg-cover rounded-3xl" src={img} />
                ))}
            </div>
        </div>
    )
}
export default CertificateGrid;