import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="w-[50%]">
      <div>
        <div className="flex items-center">
          <Link
            to="/home"
            className="p-2 rounded-full hover:bg-gray-200 ease-in duration-200 cursor-pointer"
          >
            <IoArrowBackOutline size={"25px"} />
          </Link>
          <div className="ml-5">
            <h1 className="font-bold text-lg">Archit</h1>
            <p className="text-gray-500 text-sm ">10 Posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
          alt="logo"
        ></img>
        <div className="absolute top-52 ml-3 ">
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            round={true}
            className="cursor-pointer"
          />
        </div>
        <div className="text-right m-4">
          <button className="rounded-full px-4 py-2 border border-gray-400 hover:bg-gray-200 ease-in duration-200">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Architjain</h1>
          <p className="">@archit</p>
        </div>
        <div>
          <p>
            Web Developer Specializing in React & MERN Stack | Building
            Innovative Digital Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
