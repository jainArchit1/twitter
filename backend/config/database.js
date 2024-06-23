import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});
const ConnectDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};
export default ConnectDb;
