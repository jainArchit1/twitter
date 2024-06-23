import express from "express";
const routes = express.Router();
import {
  Signup,
  Login,
  Logout,
  BookMark,
  getMyProfile,
  getOtherProfile,
} from "../controllers/auth.js";
import isAuth from "../config/auth.js";
routes.post("/signup", Signup);
routes.post("/login", Login);
routes.get("/logout", Logout);
routes.put("/bookmark/:id", isAuth, BookMark);
routes.get("/getMyProfile/:id", isAuth, getMyProfile);
routes.get("/getOtherProfile/:id", isAuth, getOtherProfile);
export default routes;
