/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import { useGetHomeDetailQuery } from "../services/homeApiServices";
import Navbar from "../components/Navbar/Navbar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { useState } from "react";
import Map from "../components/Map";
import Loader from "../components/Loader";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHomeDetailQuery({ id });

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
  console.log(position);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-[250px] grid gap-5 grid-cols-1 2xl:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-gray-800 text-[35px] font-semibold ">{title}</h1>
          <div className="my-5">
            <img src={image} className="rounded-2xl h-[450px] w-full" />
          </div>
          <h1 className="text-gray-800 text-[35px] font-semibold">{title}</h1>
          <div className="flex gap-3">
            <span className="text-[22px] text-gray-700">{guests} guests</span>
            <span className="text-[22px] text-gray-700">
              {bedrooms} bedrooms
            </span>
            <span className="text-[22px] text-gray-700">
              {bathrooms} bathrooms
            </span>
            <span className="text-[22px] text-gray-700">{beds} beds</span>
          </div>
          <div className="my-5 flex items-center gap-4">
            <button onClick={handleClick}>
              {status ? (
                <div className="flex items-center gap-2">
                  <AiFillHeart className="text-[35px] text-red-500" />
                  <span className="text-[20px] text-gray-800 border-b-2 border-black">
                    Save
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 ">
                  <AiOutlineHeart className="text-[35px]  text-gray-800" />
                  <span className="text-[20px] text-gray-800 border-b-2 border-black">
                    Save
                  </span>
                </div>
              )}
            </button>
            <span className="text-[20px] text-gray-100 bg-[#FF385C] p-1 rounded-3xl px-4">
              {category}
            </span>
          </div>
          <hr className="my-10" />
          <p className="text-[22px] mb-3 text-gray-700 text-justify">
            {description}
          </p>
          <hr className="my-10" />
          <div>
            <h1 className="text-[28px] my-4 ">What you'll sleep</h1>
            <div className="flex flex-wrap gap-5">
              <div className="border-2 rounded-2xl text-center p-10">
                <MdOutlineBedroomChild className="text-[30px] inline" />
                <div className="mt-3 font-bold">Bedroom {bedrooms}</div>
              </div>
              <div className="border-2 rounded-2xl text-center p-10">
                <LiaBedSolid className="text-[30px] inline" />
                <div className="mt-3 font-bold">Beds {beds}</div>
              </div>
              <div className="border-2 rounded-2xl text-center p-10">
                <MdOutlineBathroom className="text-[30px] inline" />
                <div className="mt-3 font-bold">Bathrooms {bathrooms}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="border-2 w-[500px] p-10 sticky top-60 h-96 rounded-2xl shadow-xl">
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
                        Add date
                      </h1>
                    </div>
                  </button>
                  <button className="p-3">
                    <div className="text-left">
                      <h1 className="uppercase text-black">Check Out</h1>
                      <h1 className="uppercase text-gray-700 text-sm">
                        Add date
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
                    <span className="text-[20px]">1</span>
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
        <div className="my-10 container mx-auto">
          <Map position={position} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
