/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Region from './Region';
import Calendars from './Calendars';
import Guest from './Guest';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../../../services/ReserveSlice';
const Filter = ({showFilter,setShowFilter}) =>
{
    const dispatch = useDispatch();
    const [ checkIn, setCheckIn ] = useState( '' );
    const [ checkOut, setCheckOut ] = useState( '' );
    const [ guest, setGuest ] = useState( 0 );
    const checkinDate = new Date( checkIn );
    const checkoutDate = new Date( checkOut );
    const {reserveData} = useSelector((state) => state.reserve)
    const formattedCheckinDate = checkinDate.toLocaleDateString( undefined, {
        month: 'short',
        day: 'numeric',
    } );
    const formattedCheckoutDate = checkoutDate.toLocaleDateString( undefined, {
        month: 'short',
        day: 'numeric',
    } );
    const [ active, setActive ] = useState( 'where' );
    const submitReservation = (e) => {
        const resercationData = {formattedCheckinDate,formattedCheckoutDate,guest}
        e.preventDefault();
        dispatch(addReservation(resercationData))
        setShowFilter(!showFilter)
    }
    return (
        <>
            <motion.div
                initial={ { opacity: 1, y: '10vh' } }
                animate={ { opacity: 1, y: '0' } }
                transition={ { duration: 0.3 } }
                className=" hidden lg:flex fixed inset-0 bg-white h-[100px] z-10 top-28  justify-center ">
                <form onSubmit={submitReservation} action="">
                    <div className=" flex justify-center items-center bg-stone-200 rounded-full">
                        {/* where */ }
                        <div onClick={ () => setActive( 'where' ) } className={ `w-[400px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'where' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                            <h1 className=" text-[18px] font-bold text-black">Where</h1>
                            <span className=" text-[15px] text-stone-600">Search destinations</span>
                        </div>
                        {/* checkIn */ }
                        <div onClick={ () => setActive( 'checkIn' ) } className={ `w-[200px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'checkIn' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                            <h1 className=" text-[18px] font-bold text-black">Check in</h1>
                            <span className=" text-[15px] text-stone-600">{ formattedCheckinDate === 'Invalid Date' ? 'Add Date' : formattedCheckinDate }</span>
                        </div>
                        {/* checkOut */ }
                        <div onClick={ () => setActive( 'checkOut' ) } className={ `w-[200px] px-10 py-5 rounded-full  cursor-pointer ${ active === 'checkOut' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                            <h1 className=" text-[18px] font-bold text-black">Check out</h1>
                            <span className=" text-[15px] text-stone-600">{ formattedCheckoutDate === 'Invalid Date' ? 'Add Date' : formattedCheckoutDate }</span>
                        </div>
                        {/* guest */ }
                        <div onClick={ () => setActive( 'guest' ) } className={ `w-[350px] px-10 py-5 rounded-full cursor-pointer flex justify-between gap-6 ${ active === 'guest' ? 'bg-white shadow-2xl' : 'hover:bg-stone-300' }` }>
                            <div className="">
                                <h1 className=" text-[18px] font-bold text-black">Who </h1>
                                <span className=" text-[15px] text-stone-600"> { guest ? guest : 'Add Guest' }</span>
                            </div>
                            <button type='submit' className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                                <BsSearch size={ 20 } />
                                <h1 className=' text-white text-[20px] font-[700]'>Search</h1>
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>

            { active === 'where' && <Region /> }
            { [ 'checkIn', 'checkOut' ].includes( active ) && <Calendars checkIn={ checkIn } setCheckIn={ setCheckIn } checkOut={ checkOut } setCheckOut={ setCheckOut } /> }
            { active === 'guest' && <Guest guest={ guest } setGuest={ setGuest } /> }

        </>
    );
};

export default Filter;
