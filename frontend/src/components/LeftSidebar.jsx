import React from "react";
import { CiHome } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const LeftSidebar = () => {
  return (
    <div className="w-[15%]">
      <div>
        <div>
          <img
            src="https://img.freepik.com/premium-psd/black-brand-new-twitter-x-logo-icon_1129635-1.jpg"
            alt="logo"
            width={"40px"}
            className="ml-4 hover:bg-slate-400 rounded-full"
          ></img>
        </div>
        <div className="my-4">
          <Link
            to="/home"
            className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200"
          >
            <div className="">
              <CiHome size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Home</h1>
          </Link>
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              <IoIosSearch size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Explore</h1>
          </div>
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              <IoIosNotificationsOutline size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Notifications</h1>
          </div>
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              <MdOutlineMail size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Messages</h1>
          </div>
          {/* <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full">
            <div>
              <CiHome />
            </div>
            <h1 className="font-bold ml-2 text-lg">Grok</h1>
          </div> */}
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              <FaBookmark size={"30px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">BookMark</h1>
          </div>
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              {/* <BsTwitterX size={"30px"} /> */}
              <RiTwitterXFill size={"35px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Premium</h1>
          </div>
          <Link
            to="/profile"
            className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200"
          >
            <div>
              <CgProfile size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Profile</h1>
          </Link>
          <div className="flex items-center my-2 py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-full ease-in duration-200">
            <div>
              <CiCircleMore size={"40px"} />
            </div>
            <h1 className="font-bold ml-2 text-lg">Logout</h1>
          </div>
          <button className="px-4 py-2 bg-[#1D9Bf0] rounded-full w-[200px] cursor-pointer text-center hover:bg-blue-500 text-md text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
