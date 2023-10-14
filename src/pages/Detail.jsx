/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from "react-router-dom";
import { useGetHomeDetailQuery } from "../services/homeApiServices";
import Navbar from "../components/Navbar/Navbar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { useState } from "react";
import Map from "../components/Map";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Detail = () => {
  const { formattedCheckinDate, formattedCheckoutDate, guest } = useSelector(
    (state) => state.reserve.reserveData,
  );
  const { id } = useParams();
  const { data, isLoading } = useGetHomeDetailQuery({ id });
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setStatus(!status);
  };

  if (isLoading) {
    return <Loader />;
  }

  const home = data?.data;
  const {
    title,
    description,
    bathrooms,
    bedrooms,
    beds,
    category,
    guests,
    image,
    lat,
    long,
    price,
  } = home;
  const position = [lat, long];
  return (
    <div className="">
      {/* navbar */}
      <div className="">
        <div className=" hidden xl:block">
          <Navbar />
        </div>
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer px-10 flex justify-start  border-b-2 py-5 items-center xl:hidden"
        >
          <BiChevronLeft className=" text-[30px] md:text-[33px] lg:text-[35px]" />
          <h1 className=" text-[17px] lg:text-[22px] xl:text-[28px] ">Home</h1>
        </div>
      </div>
      <div className="container px-10 mx-auto mt-[20px] xl:mt-[250px] grid gap-5 grid-cols-1 2xl:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-gray-800 text-[20px] lg:text-[30px] xl:text-[35px] lg:font-semibold">
            {title}
          </h1>
          <div className="my-5">
            <img
              src={image}
              className=" rounded-sm xl:rounded-2xl h-[300px] lg:h-[350px] xl:h-[450px] w-full"
            />
          </div>
          <h1 className="text-gray-800 text-[20px] lg:text-[30px] xl:text-[35px] font-semibold">
            {title}
          </h1>
          <div className="flex gap-3">
            <span className=" text-[14px] lg:text-[20p] xl:text-[22px] text-gray-700">
              {guests} guests
            </span>
            <span className=" text-[14px] lg:text-[20p] xl:text-[22px] text-gray-700">
              {bedrooms} bedrooms
            </span>
            <span className=" text-[14px] md:text-[20p] xl:text-[22px] text-gray-700">
              {bathrooms} bathrooms
            </span>
            <span className=" text-[14px] md:text-[20p] xl:text-[22px] text-gray-700">
              {beds} beds
            </span>
          </div>
          <div className="my-5 flex items-center gap-4">
            <button onClick={handleClick}>
              {status ? (
                <div className="flex items-center gap-2">
                  <AiFillHeart className=" text-[20px] lg:text-[30px] xl:text-[35px] text-red-500" />
                  <span className=" text-[13px] lg:text-[15px] xl:text-[20px] text-gray-800 border-b-2 border-black">
                    Save
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 ">
                  <AiOutlineHeart className=" text-[20px] lg:text-[30px] xl:text-[35px]  text-gray-800" />
                  <span className=" text-[13px] lg:text-[15px] xl:text-[20px] text-gray-800 border-b-2 border-black">
                    Save
                  </span>
                </div>
              )}
            </button>
            <span className=" text-[13px] lg:text-[15px] xl:text-[20px] text-gray-100 bg-[#FF385C] p-1 rounded-3xl px-4">
              {category}
            </span>
          </div>
          <hr className="my-10" />
          <p className=" text-[15px] lg:text-[20px] xl:text-[22px] mb-3 text-gray-700 text-justify">
            {description}
          </p>
          <hr className="my-10" />
          <div>
            <h1 className=" text-[17px] lg:text-[22px] xl:text-[28px] my-4 ">
              What you'll sleep
            </h1>
            <div className="flex flex-wrap gap-5">
              <div className="border-2 rounded-2xl text-center p-3 lg:p-6 xl:p-10">
                <MdOutlineBedroomChild className=" text-[20px] lg:text-[25px] xl:text-[30px] inline" />
                <div className=" text-[15px] lg:text-[18px] xl:text-[22px] mt-3 font-bold">
                  Bedroom {bedrooms}
                </div>
              </div>
              <div className="border-2 rounded-2xl text-center p-3 lg:p-6 xl:p-10">
                <LiaBedSolid className=" text-[20px] lg:text-[25px] xl:text-[30px] inline" />
                <div className=" text-[15px] lg:text-[18px] xl:text-[22px] mt-3 font-bold">
                  Beds {beds}
                </div>
              </div>
              <div className="border-2 rounded-2xl text-center p-3 lg:p-6 xl:p-10">
                <MdOutlineBathroom className=" text-[20px] lg:text-[25px] xl:text-[30px] inline" />
                <div className=" text-[15px] lg:text-[18px] xl:text-[22px] mt-3 font-bold">
                  Bathrooms {bathrooms}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* reservation */}
        <div className=" hidden xl:flex justify-center mt-20">
          <div className="border-2 w-[500px] p-10 sticky top-40 h-96  rounded-2xl shadow-xl">
            <h1 className="text-[30px] font-bold">
              ${price} <span className="text-[25px] font-normal">night</span>{" "}
            </h1>
            <form>
              <div className="border-2 rounded-2xl mt-5  ">
                <div className="grid grid-cols-2 ">
                  <button className="border-r-2 p-3">
                    <div className="text-left">
                      <h1 className="uppercase text-black">Check In</h1>
                      <h1 className="uppercase text-gray-700 text-sm">
                        {formattedCheckinDate === "Invalid Date"
                          ? "Add Date"
                          : formattedCheckinDate}
                      </h1>
                    </div>
                  </button>
                  <button className="p-3">
                    <div className="text-left">
                      <h1 className="uppercase text-black">Check Out</h1>
                      <h1 className="uppercase text-gray-700 text-sm">
                        {formattedCheckoutDate === "Invalid Date"
                          ? "Add Date"
                          : formattedCheckoutDate}
                      </h1>
                    </div>
                  </button>
                </div>
                <div className="flex justify-between items-center border-t-2 p-4">
                  <div>Guests</div>
                  <div className="flex gap-3 items-center">
                    <button className="rounded-full border-2 border-gray-500 text-gray-500 w-8 h-8 cursor-pointer">
                      +
                    </button>
                    <span className="text-[20px]">
                      {guest ? guest : "Add Guest"}
                    </span>
                    <button className="rounded-full border-2 border-gray-500 text-gray-500 w-8 h-8 cursor-pointer">
                      -
                    </button>
                  </div>
                </div>
              </div>
              <button className="font-bold text-[20px] text-center bg-[#DA0A64] text-white w-full p-4 block rounded-2xl my-3">
                Reserve
              </button>
              <p className="text-center">You won't be charged yet</p>
            </form>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-10" />
        <div className="my-10 container mx-auto px-10">
          <Map position={position} />
        </div>
      </div>
      <div className=" fixed bottom-0 z-[1998] bg-white w-full flex justify-between items-center xl:hidden px-10 py-5">
        <div className="">
          <h1 className=" text-[20px] lg:text-[25px] xl:text-[30px] font-bold">
            ${price}{" "}
            <span className=" text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] font-normal">
              night
            </span>{" "}
          </h1>
        </div>
        <div>
          <button className="font-bold text-[15px] lg:text-[18px] xl:text-[20px] text-center bg-[#DA0A64] text-white px-4 lg:px-6 lg:py-3 py-2 block rounded-xl my-3">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
