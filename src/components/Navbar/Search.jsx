/* eslint-disable react/prop-types */
import {BsSearch} from 'react-icons/bs'
const Search = ({setShowFilter,showFilter}) => {

  return (
    <div>
      <div onClick={() => setShowFilter(!showFilter)} className=" flex items-center justify-center px-6 py-2 rounded-full shadow-lg">
        <div className=" cursor-pointer select-none">
            <h1 className=" text-[14px] lg:text-[16px] xl:text-[18px] px-2 lg:px-4 xl:px-6 font-[600] border-r-2 border-stone-400">Any Where</h1>
        </div>
        <div className=" cursor-pointer select-none">
            <h1 className=" text-[14px] lg:text-[16px] xl:text-[18px] px-2 lg:px-4 xl:px-6 font-[600] border-r-2 border-stone-400">Any Week</h1>
        </div>
        <div className=" cursor-pointer select-none">
          <h1 className=' text-[14px] lg:text-[16px] xl:text-[18px] px-2 lg:px-4 xl:px-6 font-[500] text-stone-500'> Add Guest</h1>
        </div>
        <div className=" cursor-pointer select-none order-first xl:order-last bg-white text-black xl:bg-[#FF385C] xl:text-white p-3 rounded-full">
          <BsSearch size={18} />
        </div>
      </div>
    </div>
  )
}

export default Search
