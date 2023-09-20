import Category from "./Category";
import Search from "./Search";
import User from "./User";
import airbnb from "./images/airbnb.png";
const Navbar = () => {
  return (
    <div className="fixed px-5 z-10 top-0 w-full bg-white">
      {/* navbar */}
      <div className=" flex items-center border-b-2 justify-center md:justify-between p-2 lg:p-4 xl:p-6">
        {/* logo */}
        <div className=" items-center gap-2 hidden xl:flex">
          <img src={airbnb} className="w-[50px] h-[50px]" alt="" />
          <h1 className="text-[30px] text-[#FF385C] font-[700]">airbnb</h1>
        </div>
        {/* filter */}
        <Search />
        {/* user */}
        <User />
      </div>
      <div className=" pt-[20px] lg:pt-[40px]">
        <Category />
      </div>
    </div>
  );
};

export default Navbar;
