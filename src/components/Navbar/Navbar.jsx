import { useState } from "react";
import Category from "./Category";
import Search from "./Search";
import User from "./User";
import airbnb from "./images/airbnb.png";
import Filter from "./filters/Filter";
const Navbar = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="w-screen fixed bg-transparent top-0 z-10">
      {/* navbar */}
      <div className=" flex items-center bg-white border-b-2 justify-center md:justify-between p-2 lg:p-4 xl:p-6">
        {/* logo */}
        <div className=" items-center gap-2 hidden xl:flex">
          <img src={airbnb} className="w-[50px] h-[50px]" alt="" />
          <h1 className="text-[30px] text-[#FF385C] font-[700]">airbnb</h1>
        </div>
        {/* filter */}
        <Search showFilter={showFilter} setShowFilter={setShowFilter} />
        {/* user */}
        <User />
      </div>
      <div className="bg-white pt-[20px] lg:pt-[40px] -z-0">
        <Category />
      </div>
      {showFilter && <Filter />}
    </div>
  );
};

export default Navbar;
