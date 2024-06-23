import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./config/.env", // assuming config folder is in the same directory
});

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token is not available",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export default isAuth;
