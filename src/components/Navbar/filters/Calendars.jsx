import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { motion } from "framer-motion";

const Calendars = () => {
  const [startDate, setStartDate] = useState(null);
  const [endtDate, setEndDate] = useState(null);
  console.log("start date", startDate, "endDate", endtDate);

  const isDateDisabled = (date) => date < new Date();
  return (
    <motion.div
      initial={{ opacity: 1, y: "10vh" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 0.5 }}
      className=" flex justify-center  items-center"
    >
      <div className="w-[850px] bg-white rounded-2xl shadow-2xl">
        <div className="p-6 flex justify-center items-center gap-20">
          <Calendar
            className={"border-none"}
            value={startDate}
            onChange={(date) => setStartDate(date)}
            tileDisabled={({ date }) => isDateDisabled(date)}
          />
          <Calendar
            className={"border-none"}
            value={endtDate}
            onChange={(date) => setEndDate(date)}
            tileDisabled={({ date }) => isDateDisabled(date)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Calendars;
