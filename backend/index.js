import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/database.js";
import routes from "./routes/routes.js";
import tweetroutes from "./routes/tweet.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({
  path: ".env",
});
//connect to database
ConnectDb();
//activate server
const app = express();
// middleware
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  Credential: true,
};
app.use(cors(corsOptions));
//Routers
app.use("/auth", routes);
app.use("/api/v1", tweetroutes);
//activate server
app.listen(process.env.PORT, () => {
  console.log(`server run at ${process.env.PORT} `);
});
// default routes
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
