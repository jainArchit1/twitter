import React from "react";
import Home from "./Home";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Feed";
import Profile from "./Profile";
import Signup from "./Signup";
const Body = () => {
  const app = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/home",
          element: <Feed></Feed>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={app}></RouterProvider>
    </div>
  );
};

export default Body;
