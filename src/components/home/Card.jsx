import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Card = ({
  id,
  title,
  description,
  image,
  price,
  start_date,
  end_date,
}) => {
  const [status, setStatus] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setStatus(!status);
  };
  return (
    <Link to={`/${id}`}>
      <div className="relative">
        <button className="absolute pt-4 right-6" onClick={handleClick}>
          {status ? (
            <AiFillHeart className="text-[33px] text-red-500" />
          ) : (
            <AiOutlineHeart className="text-[33px]  text-gray-200" />
          )}
        </button>
        <img
          src={image}
          className="h-[300px] xl:h-[330px] text-center bg-blue-400 rounded-xl w-full"
        />
      </div>

      <div className="py-4">
        <h1 className="text-[18px] xl:text-[20px] font-semibold">
          {title?.slice(0, 35)}
        </h1>
        <h1 className="text-[16px] xl:text-[18px] my-1 text-gray-500">
          {description?.slice(0, 20)}
        </h1>
        <h1 className="text-[16px] xl:text-[17px] my-1 text-gray-500">
          {start_date} - {end_date}
        </h1>
        <h2 className="font-bold text-[16px] xl:text-[19px] ">
          ${price} USD <span className="text-gray-800 font-normal">night</span>{" "}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
