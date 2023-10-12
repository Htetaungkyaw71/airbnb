import {BiMenu} from 'react-icons/bi'
import person from './images/person.png'
import { useState } from 'react'
import UserModel from './UserModel'
const User = () => {
  const [show,setshow] = useState(false)
  return (
    <div>
     <div className=" hidden sm:flex items-center gap-5">
        <div className="">
            <button className=" px-6 py-3 rounded-full transition-all duration-300 text-[18px] font-[600] hover:bg-stone-100">Airbnb your home</button>
        </div>
        <div onClick={() => setshow(!show)} className=' cursor-pointer select-none flex border border-stone-300 justify-center items-center gap-2 hover:bg-stone-100 px-3 py-1 rounded-full transition-all duration-300'>
            <BiMenu size={30} />
            <img className=' w-[40px] h-[40px]' src={person} alt="" />
        </div>
        {show && <UserModel /> }
     </div>
    </div>
  )
}

export default User
