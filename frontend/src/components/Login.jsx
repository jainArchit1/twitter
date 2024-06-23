import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { USER_API_END_POINT } from "../utils/constant.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  async function submitHandle(e) {
    try {
      e.preventDefault();
      console.log(data);
      const res = await axios.post(`${USER_API_END_POINT}/login`, data, {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      if (res.data.success) {
        navigation("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast(error.response.data.message);
      console.log(error);
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
              onSubmit={submitHandle}
            >
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

              <h1 className="font-bold text-xl">
                Don't have an account ?{" "}
                <span>
                  <Link to="/signup">Registered</Link>
                </span>
              </h1>
              <button
                type="submit"
                className="w-[300px] rounded-full border border-gray-800 outline-blue-500 py-2 my-3 hover:bg-[#1D9Bf0] ease-in duration-200 font-bold hover:text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
