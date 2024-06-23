import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
// import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[80%] flex justify-between mx-auto">
      <LeftSidebar></LeftSidebar>
      <Outlet></Outlet>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;
