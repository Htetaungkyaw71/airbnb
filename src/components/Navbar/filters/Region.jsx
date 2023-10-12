import { useState } from "react";
import { motion } from "framer-motion";

const Region = () => {
  const [click, setClick] = useState(null);
  const data = [
    {
      id: 1,
      name: "I'm flexible",
      photo:
        "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    },
    {
      id: 2,
      name: "Europe",
      photo:
        "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    },
    {
      id: 3,
      name: "Thiland",
      photo:
        "https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320",
    },
    {
      id: 4,
      name: "United State",
      photo:
        "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    },
    {
      id: 5,
      name: "United Kingdom",
      photo:
        "https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320",
    },
    {
      id: 6,
      name: "Australia",
      photo:
        "https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 1, y: "10vh" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className=" w-[500px] ml-[300px] bg-white rounded-2xl shadow-xl">
        <h1 className=" text-[18px] font-bold p-6">Search By Region</h1>
        <div className=" grid grid-cols-3 gap-10 p-5">
          {data.map((region) => (
            <div
              onClick={() => setClick(region.id)}
              className=" rounded-lg"
              key={region.id}
            >
              <img
                src={region.photo}
                className={`border-2    rounded-lg ${
                  click === region.id
                    ? "border-black"
                    : "hover:border-stone-400"
                }`}
                width={120}
                height={120}
                alt=""
              />
              <p className=" text-[18px] font-thin">{region.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Region;
