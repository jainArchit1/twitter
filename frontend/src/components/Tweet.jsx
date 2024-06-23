import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4 ">
          <Avatar
            googleId="118096717852922241760"
            size="40px"
            round={true}
            className="ml-2"
          />
          <div className="ml-4 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Archit Jain</h1>
              <p className="text-gray-500 ml-1">@archit .1m</p>
            </div>
            <div>
              <p>hii this is a tweeet.hello my name is aj this is a twitter</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div className="hover:bg-blue-100 rounded-full p-2 cursor-pointer">
                  <FaRegComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full hover:bg-rose-200 cursor-pointer">
                  <CiHeart size={"20px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full hover:bg-blue-200 cursor-pointer">
                  <CiBookmark size={"20px"} />
                </div>

                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
