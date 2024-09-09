import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8002;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });

app.get('/',(req,res) => {
    res.send("server running...")
})