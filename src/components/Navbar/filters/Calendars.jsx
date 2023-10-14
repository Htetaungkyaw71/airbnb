/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { motion } from "framer-motion";


const Calendars = ( { setCheckIn, checkIn, setCheckOut, checkOut } ) =>
{
  const isDateDisabled = ( date ) => date < new Date();
  return (
    <motion.div
      initial={ { opacity: 1, y: "10vh" } }
      animate={ { opacity: 1, y: "0" } }
      transition={ { duration: 0.5 } }
      className=" flex justify-center  items-center"
    >
      <div className=" w-[400px] lg:w-[850px] bg-white rounded-2xl shadow-2xl">
        <div className=" p-2 lg:p-6 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-20">
          <Calendar
            className={ "border-none" }
            value={ checkIn }
            onChange={ ( date ) => setCheckIn( date ) }
            tileDisabled={ ( { date } ) => isDateDisabled( date ) }
          />
          <Calendar
            className={ "border-none" }
            value={ checkOut }
            onChange={ ( date ) => setCheckOut( date ) }
            tileDisabled={ ( { date } ) => isDateDisabled( date ) }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Calendars;
