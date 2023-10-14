/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Guest = ({ setGuest }) => {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [pet, setPet] = useState(0);
  useEffect(() => {
    const totalGuest = adult + children + infant + pet;
    setGuest(totalGuest);
  }, [adult, children, infant, pet]);
  return (
    <motion.div
      initial={{ opacity: 1, y: "10vh" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 0.5 }}
      className=" justify-end px-2 lg:px-20 items-center flex"
    >
      <div className=" w-[400px] lg:w-[600px] bg-white rounded-2xl flex flex-col gap-10 shadow-2xl px-5 lg:px-20 py-10">
        {/* adult */}
        <div className=" flex justify-between items-center p-2">
          <div className=" flex flex-col ">
            <h1 className=" text-[25px] font-[500] text-black">Adults</h1>
            <span className=" text-[18px] text-stone-500">
              Ages 13 or above
            </span>
          </div>
          <div className=" select-none flex justify-center items-center gap-10 text-[20px] text-black">
            <BiMinus onClick={() => adult > 0 && setAdult(adult - 1)} />
            <p>{adult}</p>
            <BsPlus onClick={() => setAdult(adult + 1)} />
          </div>
        </div>
        {/* children */}
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col ">
            <h1 className=" text-[25px] font-[500] text-black">Children</h1>
            <span className=" text-[18px] text-stone-500">Ages 2 - 12</span>
          </div>
          <div className="select-none flex justify-center items-center gap-10 text-[20px] text-black">
            <BiMinus
              onClick={() => children > 0 && setChildren(children - 1)}
            />
            <p>{children}</p>
            <BsPlus onClick={() => setChildren(children + 1)} />
          </div>
        </div>
        {/* infant */}
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col ">
            <h1 className=" text-[25px] font-[500] text-black">Infant</h1>
            <span className=" text-[18px] text-stone-500">Under 2</span>
          </div>
          <div className="select-none flex justify-center items-center gap-10 text-[20px] text-black">
            <BiMinus onClick={() => infant > 0 && setInfant(infant - 1)} />
            <p>{infant}</p>
            <BsPlus onClick={() => infant < 5 && setInfant(infant + 1)} />
          </div>
        </div>
        {/* pet */}
        <div className=" flex justify-between items-center">
          <div className=" flex flex-col ">
            <h1 className=" text-[25px] font-[500] text-black">Pet</h1>
            <span className=" text-[18px] text-stone-500">
              Bringing a service animal?
            </span>
          </div>
          <div className="select-none flex justify-center items-center gap-10 text-[20px] text-black">
            <BiMinus onClick={() => pet > 0 && setPet(pet - 1)} />
            <p>{pet}</p>
            <BsPlus onClick={() => pet < 5 && setPet(pet + 1)} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Guest;
