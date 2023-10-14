/* eslint-disable react/no-unescaped-entities */
import { loadState } from "../../services/localStorage";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setshowloginModal,
  setshowregisterModal,
} from "../../services/modalSlice";

const UserModel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = loadState();

  const handleLogout = () => {
    localStorage.removeItem("data");
    navigate("/");
  };

  return (
    <div className="absolute z-20 right-10 top-[100px] bg-white  w-[300px] rounded-lg shadow-xl border">
      <div className="p-5">
        {/* auth */}
        <div className="py-2 flex flex-col gap-2">
          {data ? (
            <div className=" flex flex-col gap-2">
              <Link
                to="/create_property"
                className=" text-stone-600 text-[19px] hover:bg-stone-200 px-2 py-3 rounded-lg "
              >
                Airbnb your home
              </Link>

              <Link
                to="/reservations"
                className=" text-stone-600 text-[19px] hover:bg-stone-200 px-2 py-3 rounded-lg "
              >
                My Reservations
              </Link>

              <Link
                to="/myhome"
                className=" text-stone-600 text-[19px] hover:bg-stone-200 px-2 py-3 rounded-lg"
              >
                My Properties
              </Link>

              <Link
                to="/favourites"
                className=" text-stone-600 text-[19px] hover:bg-stone-200 px-2 py-3 rounded-lg "
              >
                My Favourites
              </Link>

              <div className="  hover:bg-stone-200 px-2  rounded-lg">
                <button
                  className=" text-stone-600 text-[19px]  py-2"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col gap-2">
              <button
                className=" text-black text-[19px] text-left  py-2 hover:bg-stone-200 px-2 rounded-lg"
                onClick={() => dispatch(setshowregisterModal(true))}
              >
                Sign Up
              </button>
              <button
                className=" text-black text-[19px] text-left py-2 hover:bg-stone-200 px-2 rounded-lg"
                onClick={() => dispatch(setshowloginModal(true))}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserModel;
