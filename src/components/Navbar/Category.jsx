import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Category = () => {
  const data = [
    {
      id: 1,
      name: "camping",
      photo:
        "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
      id: 2,
      name: "countryside",
      photo:
        "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      id: 3,
      name: "beach",
      photo:
        "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg ",
    },
    {
      id: 4,
      name: "islands",
      photo:
        "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    },
    {
      id: 5,
      name: "treehouses",
      photo:
        "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    },
    {
      id: 6,
      name: "tinyhouses",
      photo:
        "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    },
    {
      id: 7,
      name: "lake",
      photo:
        "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    },
    {
      id: 8,
      name: "towers",
      photo:
        "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
      id: 9,
      name: "boats",
      photo:
        "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
    },
    {
      id: 10,
      name: "desert",
      photo:
        "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    },
  ];
  return (
    <div>
      <div className=" hidden md:grid grid-cols-10 px-5 lg:px-20">
        {data.map((category) => (
          <Link
            to={`/category/${category.name}`}
            key={category.id}
            className=" flex flex-col justify-center items-center gap-2 cursor-pointer  group"
          >
            <img
              className=" w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]"
              src={category.photo}
              alt=""
            />
            <span className=" text-[10px] lg:text-[15px] font-[500] text-stone-600 group-hover:border-b-2 group-hover:border-zinc-500 pb-3 transition-all duration-100">
              {category.name.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
      <Swiper
        className=" px-5 block md:hidden"
        // navigation={ true }
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={0} // Set the space between slides as needed
      >
        {data.map((category) => (
          <SwiperSlide
            key={category.id}
            className=" flex flex-col justify-center items-center cursor-pointer"
          >
            <img className=" w-[20px] h-[20px]" src={category.photo} alt="" />
            <span className=" text-[15px] font-[500] text-stone-600 group-hover:border-b-2 group-hover:border-zinc-500 pb-3 transition-all duration-100">
              {category.name}
            </span>
          </SwiperSlide>
        ))}
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Category;
