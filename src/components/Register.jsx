/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useSignUpMutation } from "../services/userApiServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveState } from "../services/localStorage";
import { useDispatch } from "react-redux";
import {
  setshowloginModal,
  setshowregisterModal,
} from "../services/modalSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [signUp] = useSignUpMutation();
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const formSubmit = async (data) => {
    try {
      await signUp(data)
        .unwrap()
        .then((fulfilled) => {
          const data = {
            ...fulfilled.user,
            token: fulfilled.token,
          };
          localStorage.removeItem("data");
          saveState(data);
          dispatch(setshowloginModal(false));
          dispatch(setshowregisterModal(false));
        });
    } catch (error) {
      console.log(error);
      toast.error(error.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div>
        <div className="flex justify-between border-b-2 p-4">
          <button
            onClick={() => dispatch(setshowregisterModal(false))}
            className="text-2xl"
          >
            <RxCross2 />
          </button>
          <h1 className="text-xl font-semibold">Log in or sign up</h1>
        </div>
        <div className="p-5">
          <h1 className="text-left text-[25px] font-semibold">
            Welcome to Airbnb
          </h1>

          <form className="mt-4" onSubmit={handleSubmit(formSubmit)} noValidate>
            <div className=" border-gray-400 w-full">
              {errors?.username?.message && (
                <p className="p-2  text-red-500 rounded-xl font-[600] text-center my-2">
                  {errors?.username?.message}
                </p>
              )}
              {errors?.email?.message && (
                <p className="p-2 text-red-500 rounded-xl font-[600] text-center my-2">
                  {errors?.email?.message}
                </p>
              )}
              {errors?.password?.message && (
                <p className="p-2 text-red-500 rounded-xl font-[600] text-center my-2">
                  {errors?.password?.message}
                </p>
              )}
              <input
                type="text"
                id="username"
                className="p-4 outline-none w-full rounded-t-2xl border-gray-400 border-2 border-b-0"
                placeholder="Username"
                {...register("username", { required: "Username is Required" })}
              />

              <input
                type="email"
                id="email"
                className="p-4 outline-none w-full  border-gray-400 border-2 border-b-0"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Inavlid Email Format",
                  },
                })}
              />

              <input
                type="password"
                id="password"
                className="p-4 w-full outline-none border-gray-400 border-2 rounded-b-2xl"
                placeholder="Password"
                {...register("password", {
                  required: "Password is Required",
                })}
              />
            </div>
            <p className="text-gray-500">
              If you have already account. Please
              <button
                className="ml-1 mt-5 text-[#DA0A64]"
                onClick={() => {
                  dispatch(setshowloginModal(true));
                  dispatch(setshowregisterModal(false));
                }}
              >
                Log In.
              </button>
            </p>

            <button
              type="submit"
              className="w-full p-4 bg-[#DA0A64] hover:bg-[#f167a3] text-white  mt-8 rounded-2xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
