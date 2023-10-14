/* eslint-disable react/prop-types */
import { useState } from "react";
import Region from "./Region";
import { BsSearch, BsArrowRight } from 'react-icons/bs';
import Calendar from "react-calendar";
import Guest from "./Guest";
const MobileFilter = ( { setShowFilter, showFilter } ) =>
{
    const [ section, setSection ] = useState( 'where' );
    return (
        <div className=" h-screen bg-white flex flex-col ">
            <div className="">
                { section === 'where' && <Region /> }
                { section === 'checkin' &&
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className=" text-[30px] font-bold text-black">CheckIn</h1>
                        <Calendar />
                    </div>
                }
                  { section === 'checkout' &&
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className=" text-[30px] font-bold text-black">Checkout</h1>
                        <Calendar />
                    </div>
                }
                { section === 'guest' && <Guest /> }
            </div>
            <div className=" px-5 flex justify-between items-center ">
                <div onClick={ () => setShowFilter( !showFilter ) } className="">
                    <h1 className=" text-black underline-offset-2 underline">Clear All</h1>
                </div>
                { section === 'where' && (
                    <div onClick={ () => setSection( 'checkin' ) } className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                        <h1 className=' text-white text-[20px] font-[700]'>Next</h1>
                        <BsArrowRight size={ 20 } />
                    </div> ) }
                { section === 'checkin' && (
                    <div onClick={ () => setSection( 'checkout' ) } className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                        <h1 className=' text-white text-[20px] font-[700]'>Next</h1>
                        <BsArrowRight size={ 20 } />
                    </div>
                ) }
                { section === 'checkout' && (
                    <div onClick={ () => setSection( 'guest' ) } className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                        <h1 className=' text-white text-[20px] font-[700]'>Next</h1>
                        <BsArrowRight size={ 20 } />
                    </div>
                ) }
                { section === 'guest' && (
                    <div onClick={ () => setShowFilter( !showFilter ) } className=" cursor-pointer select-none text-white bg-[#FF385C] px-5 py-3 rounded-full flex justify-center items-center gap-5">
                        <BsSearch size={ 20 } />
                        <h1 className=' text-white text-[20px] font-[700]'>Search</h1>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default MobileFilter;
