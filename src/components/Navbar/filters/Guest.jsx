import { motion } from "framer-motion"
const Guest = () =>
{
    return (
        <motion.div
        initial={{opacity:1 , y:'10vh'}}
        animate={{opacity:1 , y:'0'}}
        transition={{duration:0.5}}
        className=" justify-end px-20 items-center flex">
            <div className=" w-[600px] flex flex-col gap-10 shadow-2xl px-20 py-10">
                {/* adult */ }
                <div className=" flex justify-between items-center">
                    <div className=" flex flex-col ">
                        <h1 className=" text-[25px] font-[500] text-black">Adults</h1>
                        <span className=" text-[18px] text-stone-500">Ages 13 or above</span>
                    </div>
                    <div className=" flex gap-10 text-[20px] text-black">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                {/* children */ }
                <div className=" flex justify-between items-center">
                    <div className=" flex flex-col ">
                        <h1 className=" text-[25px] font-[500] text-black">Children</h1>
                        <span className=" text-[18px] text-stone-500">Ages 2 - 12</span>
                    </div>
                    <div className=" flex gap-10 text-[20px] text-black">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                {/* infant */ }
                <div className=" flex justify-between items-center">
                    <div className=" flex flex-col ">
                        <h1 className=" text-[25px] font-[500] text-black">Infant</h1>
                        <span className=" text-[18px] text-stone-500">Under 2</span>
                    </div>
                    <div className=" flex gap-10 text-[20px] text-black">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                {/* pet */ }
                <div className=" flex justify-between items-center">
                    <div className=" flex flex-col ">
                        <h1 className=" text-[25px] font-[500] text-black">Pet</h1>
                        <span className=" text-[18px] text-stone-500">Bringing a service animal?</span>
                    </div>
                    <div className=" flex gap-10 text-[20px] text-black">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Guest
