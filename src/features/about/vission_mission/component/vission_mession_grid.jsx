import Title from './../../../../component/ui/title';
import { useTranslation } from 'react-i18next';

const VissionAndMissionGrid = ({ image, title, desccription, dir }) => {
    const { t } = useTranslation();

    // Determine the order of image and text
    const firstColumn = dir === 'rtl' ?
        <div className="flex flex-col justify-center">
            <Title title={t(title)} />
            <p className='text-[#333333] text-[1.2rem] leading-[2rem] mt-2'>{desccription}</p>
        </div> :
        <div>
            <img className="w-full h-[24rem] object-cover rounded-3xl" src={image} alt={title} />
        </div>;

    const secondColumn = dir === 'rtl' ?
        <div>
            <img className="w-full h-[24rem] object-cover rounded-3xl" src={image} alt={title} />
        </div> :
        <div className="flex flex-col justify-center">
            <Title title={t(title)} />
            <p className='text-[#333333] text-[1.2rem] leading-[2rem] mt-2'>{desccription}</p>
        </div>;

    return (
        <div className="mt-[4rem] container2 mx-auto">
            <div className="grid grid-cols-2 gap-x-[2rem]">
                {firstColumn}
                {secondColumn}
            </div>
        </div>
    )
}

export default VissionAndMissionGrid;