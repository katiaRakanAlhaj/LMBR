import icon from "../../assets/images/modelthreeicon.png"

const ModelThreeTitle = ({title}) => {
    return (
        <div className={`flex items-center gap-x-2`}>

            <img className="w-[3rem]" src={icon} />
            <p className="font-bold text-[#333333] text-[1.5rem] mt-2">
                {title} 
            </p>
        </div>
    )
}
export default ModelThreeTitle;