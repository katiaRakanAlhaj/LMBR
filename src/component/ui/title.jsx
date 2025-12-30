const Title = ({title})=> {
    return(
        <div className="flex gap-x-3 items-center">
                        <div className="w-[2rem] h-[0.1rem] -mt-1 bg-[#E7792D] rounded-full"></div>
                        <p className="font-bold text-[1.5rem] text-[#E7792D]">{title}</p>
                        <div className="w-[2rem] h-[0.1rem] -mt-1 bg-[#E7792D] rounded-full"></div>

                    </div>
    )
}
export default Title;