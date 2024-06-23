import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
const Createpost = () => {
  return (
    <div className="w-[100%] ">
      <div>
        <div className="flex justify-evenly items-center border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 ease-in duration-200 w-full px-4 py-3">
            <h1 className="text-gray-400 font-semibold text-lg text-center">
              For You
            </h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 ease-in duration-200 w-full px-4 py-3">
            <h1 className="text-gray-400 font-semibold text-lg text-center">
              following
            </h1>
          </div>
        </div>
        <div>
          <div className="flex p-4 items-center justify-center">
            <div>
              <Avatar
                googleId="118096717852922241760"
                size="40px"
                round={true}
                className="ml-2"
              />
            </div>
            <input
              type="text"
              placeholder="What is happening?!"
              className="w-full outline-none ml-4 border-none text-lg"
            ></input>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <div>
              <ul className="flex ml-[50px] gap-3 cursor-pointer">
                <li>
                  <CiImageOn
                    size={"20px"}
                    color="#1D9Bf0"
                    className="font-bold"
                  />
                </li>
                <li>
                  <MdOutlineGifBox
                    size={"20px"}
                    color="#1D9Bf0"
                    className="font-bold"
                  />
                </li>
                <li>
                  <BiPoll size={"20px"} color="#1D9Bf0" className="font-bold" />
                </li>
                <li>
                  <MdEmojiEmotions
                    size={"20px"}
                    color="#1D9Bf0"
                    className="font-bold"
                  />
                </li>
                <li>
                  <GrSchedulePlay
                    size={"20px"}
                    color="#1D9Bf0"
                    className="font-bold"
                  />
                </li>
                <li>
                  <IoLocationOutline
                    size={"20px"}
                    color="#1D9Bf0"
                    className="font-bold"
                  />
                </li>
              </ul>
            </div>
            <button className="bg-[#1D9Bf0] py-2 px-5 border-none rounded-full text-center text-white font-bold mr-5">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
