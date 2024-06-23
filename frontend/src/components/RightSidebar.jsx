import React from "react";
import { IoIosSearch } from "react-icons/io";
import Avatar from "react-avatar";
const RightSidebar = () => {
  return (
    <div className="w-[25%]">
      <div className="flex items-center w-full rounded-full p-2 bg-slate-200 outline-none">
        <IoIosSearch size={"24px"} className="mr-3" />
        <input
          className="border-none outline-none bg-transparent "
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="mt-3 w-full h-[150px] bg-slate-200 rounded-2xl">
        <div>
          <h1 className="text-lg font-bold p-3">Subscribe to Premium</h1>
          <p className="pl-2">Subscribe to unlock new features</p>
          <button className="bg-[#1D9Bf0] rounded-full px-4 py-2 ml-2 mt-3 text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
      {/* who to follow */}

      <div className="p-4 bg-slate-200 rounded-2xl  my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div className="">
              <Avatar
                googleId="118096717852922241760"
                size="40px"
                round={true}
                className="ml-2"
              />
            </div>
            <div className="ml-3">
              <h1 className="font-bold ">Archit jain</h1>
              <p className="text-sm">@archit</p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
