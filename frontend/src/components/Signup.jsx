import React from "react";
import { useState } from "react";
import { USER_API_END_POINT } from "../utils/constant.js";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  async function SubmitHandle(e) {
    console.log(data);
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, data, {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      console.error(error.message);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="flex w-[75%] gap-[11rem]">
        <div>
          <img
            src="https://img.freepik.com/premium-psd/black-brand-new-twitter-x-logo-icon_1129635-1.jpg"
            width={"500px"}
          ></img>
        </div>
        <div className=" w-[600px]">
          <h1 className="font-bold text-7xl">Happening now</h1>
          <p className="font-bold text-3xl my-9">join today.</p>
          <div className="">
            <form
              className="flex flex-col gap-4 w-[55%]"
              onSubmit={SubmitHandle}
            >
              <input
                type="text"
                placeholder="Enter Name"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-1 text-xl p-3"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-1 p-3 text-xl"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                value={data.username}
              />

              <input
                type="email"
                placeholder="Enter Email"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-1 p-3 text-xl"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
              <input
                type="text"
                placeholder="Enter Password"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-1 p-3 text-xl"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
              />

              <button
                type="submit"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-2 my-3 hover:bg-[#1D9Bf0] ease-in duration-200 font-bold hover:text-white"
              >
                Create account
              </button>

              <h1 className="font-bold text-xl">
                Already have an account ?
                <Link to={"/login"}>
                  <span className="text-lg text-blue-500"> Login Here</span>
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
