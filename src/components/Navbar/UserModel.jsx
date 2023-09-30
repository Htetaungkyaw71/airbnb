const UserModel = () =>
{
    return (
        <div
            className=" absolute top-[100px] bg-white z-20 w-[300px] rounded-lg shadow-xl border"

        >
            <div className=" p-5">
                {/* auth */ }
                <div className=" border-b-2 py-2 flex flex-col gap-2">
                    <div className="  hover:bg-stone-200 px-2 rounded-lg">
                        <button className=" text-black text-[19px]  py-2">Sign Up</button>
                    </div>
                    <div className="  hover:bg-stone-200 px-2 rounded-lg">
                        <button className=" text-stone-600 text-[19px]  py-2">Log In</button>
                    </div>
                </div>
                {/* help */ }
                <div className=" flex flex-col gap-2">
                    <div className="  hover:bg-stone-200 px-2 rounded-lg">
                        <button className=" text-stone-600 text-[19px]  py-2">AirBnb your hoem</button>
                    </div>
                    <div className="  hover:bg-stone-200 px-2 rounded-lg">
                        <button className=" text-stone-600 text-[19px]  py-2">LHelp Center</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModel
