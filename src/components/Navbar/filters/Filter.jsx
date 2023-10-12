import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Region from './Region'
import Calendars from './Calendars'
import Guest from './Guest'
import { motion } from 'framer-motion'
const Filter = () =>
{
    const [ active, setActive ] = useState( 'where' )
    return (
        <>
            <motion.div
                initial={ { opacity: 1, y: '10vh' } }
                animate={ { opacity: 1, y: '0' } }
                transition={ { duration: 0.3 } }
                className=" fixed inset-0 bg-white h-[100px] z-10 top-28 flex justify-center ">
                <div className=" flex justify-center items-center bg-stone-200 rounded-full">
                    {/* where */ }
                    <div onClick={ () => setActive( 'where' ) } className={ `w-[400px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'where' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                        <h1 className=" text-[18px] font-bold text-black">Where</h1>
                        <span className=" text-[15px] text-stone-600">Search destinations</span>
                    </div>
                    {/* checkIn */ }
                    <div onClick={ () => setActive( 'checkIn' ) } className={ `w-[200px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'checkIn' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                        <h1 className=" text-[18px] font-bold text-black">Check in</h1>
                        <span className=" text-[15px] text-stone-600">Add Dates</span>
                    </div>
                    {/* checkOut */ }
                    <div onClick={ () => setActive( 'checkOut' ) } className={ `w-[200px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'checkOut' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                        <h1 className=" text-[18px] font-bold text-black">Check out</h1>
                        <span className=" text-[15px] text-stone-600">Add Dates</span>
                    </div>
                    {/* guest */ }
                    <div onClick={ () => setActive( 'guest' ) } className={ `w-[350px] px-10 py-5 rounded-full cursor-pointer flex justify-between gap-6 ${ active === 'guest' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                        <div className="">
                            <h1 className=" text-[18px] font-bold text-black">Who </h1>
                            <span className=" text-[15px] text-stone-600">Add guests</span>
                        </div>
                        <div className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                            <BsSearch size={ 20 } />
                            <h1 className=' text-white text-[20px] font-[700]'>Search</h1>
                        </div>
                    </div>
                </div>
            </motion.div>
            { active === 'where' && <Region /> }
            { [ 'checkIn', 'checkOut' ].includes( active ) && <Calendars /> }
            { active === 'guest' && <Guest /> }

        </>
    )
}

export default Filter
