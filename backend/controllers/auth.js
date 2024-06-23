import { Sign } from "crypto";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    //validation
    if (!name || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    //check user is present or not
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User Already exist",
      });
    }
    //hasing password
    const hashPassword = await bcrypt.hash(password, 10);
    //create new user
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashPassword,
    });

    return res.status(200).json({
      newUser,
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// *****************************LOGIN***************************

export const Login = async (req, res) => {
  try {
    //fetch user data
    const { email, password } = req.body;
    // validate user data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    //check use is presnt or not
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // verify password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // tpken data
    const payload = {
      id: user._d,
    };
    //generate jwt token while login
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return res
      .status(200)
      .cookie("token", token, { expiresIn: "1d" }, { httpOnly: true })
      .json({
        success: true,
        message: "User Logged In Successfully",
        token,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
//*******************************LOGOUT********************************

export const Logout = (req, res) => {
  return res
    .cookie("token", "", {
      expiresIn: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logged Out Successfully",
    });
};
//************************Bookmark*****************************
export const BookMark = async (req, res) => {
  try {
    const userId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(userId);
    if (user.bookmarks.includes(tweetId)) {
      await User.updateOne({ $pull: { bookmarks: tweetId } });
      return res.status(200).json({
        success: true,
        message: "Unbookmarked",
      });
    }
    if (!user.bookmarks.includes(tweetId)) {
      await User.updateOne({ $push: { bookmarks: tweetId } });
      return res.status(200).json({
        success: true,
        message: "Bookmarked",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//************************getmyprofile****************************
export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-passowrd");
    return res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
//***************************getOtherProfile****************************
export const getOtherProfile = async (req, res) => {
  try {
    const { id } = req.params;
    // Execute the query to get the result
    const getotheruser = await User.find({ _id: { $ne: id } })
      .select("-password")
      .exec();
    // Check if no user is found
    if (getotheruser.length === 0) {
      // Return a 404 status and a meaningful message
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Return the user profile
    return res.status(200).json({
      getotheruser,
      success: true,
      message: "Successfully retrieved user profile",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//***********************follow***********************
export const Follow = async (req, res) => {
  try {
    const loginuserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loginuserId);
    const user = await User.findById(userId);
    if (!user.follower.includes(loginuserId)) {
      await user.updateOne({ $push: { follower: loginuserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(401).json({
        success: false,
        message: "Already followed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Followed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const unFollow = async (req, res) => {
  try {
    const loginuserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loginuserId);
    const user = await User.findById(userId);
    if (user.follower.includes(loginuserId)) {
      await user.updateOne({ $pull: { follower: loginuserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(401).json({
        success: false,
        message: "Already Unfollowed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Unfollowed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

