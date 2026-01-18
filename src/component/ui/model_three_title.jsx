import icon from "../../assets/images/modelthreeicon.png"

const ModelThreeTitle = ({title}) => {
    return (
        <div className={`flex items-center gap-x-2`}>

            <img className="lg:w-[3rem] w-[2rem]" src={icon} />
            <p className="font-bold text-[#333333] lg:text-[1.5rem] text-nowrap text-[1.2rem] mt-2">
                {title} 
            </p>
        </div>
    )
}
export default ModelThreeTitle;