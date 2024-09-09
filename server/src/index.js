import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 
import connectDB from "./db/index.js"; 
import userRoutes from "./routes/user.routes.js"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 8003;


app.use(express.json()); 
app.use(cookieParser()); 


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });


app.get("/", (req, res) => {
  res.send("Server is running...");
});


app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});
