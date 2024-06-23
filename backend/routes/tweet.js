import express from "express";
const tweetroutes = express.Router();
import isAuth from "../config/auth.js";
import {
  CreateTweet,
  Deletetweet,
  LikeorDisLike,
  getAllTweet,
} from "../controllers/tweet.js";
tweetroutes.post("/createtweet", isAuth, CreateTweet);
tweetroutes.delete("/delete/:id", isAuth, Deletetweet);
tweetroutes.put("/like/:id", isAuth, LikeorDisLike);
tweetroutes.get("/getalltweet/:id", isAuth, getAllTweet);
export default tweetroutes;
