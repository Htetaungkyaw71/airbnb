import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'
const MobileStickyFooter = () =>
{
    return (
        <div className=" fixed bottom-0 bg-white w-full z-[] flex justify-center items-center gap-4 md:gap-6 lg:gap-10 xl:hidden">
            <div className=" flex flex-col justify-center items-center gap-2 p-2">
                <BsSearch className=' text-stone-500 text-[25px] md:text-[28px] lg:text-[35px]' />
                <h1 className=' text-stone-500 text-[13px] md:text-[18px]'>Explore</h1>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 p-2">
                <AiOutlineHeart className=' text-stone-500 text-[25px] md:text-[28px] lg:text-[35px]' />
                <h1 className=' text-stone-500 text-[13px] md:text-[18px]'>WishLists</h1>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 p-2">
                <BiUserCircle className=' text-stone-500 text-[25px] md:text-[28px] lg:text-[35px]' />
                <h1 className=' text-stone-500 text-[13px] md:text-[18px]'>Login</h1>
            </div>
        </div>
    );
};

export default MobileStickyFooter;
