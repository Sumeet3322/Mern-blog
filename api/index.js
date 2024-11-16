import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

const app = express();

app.use(express.json());

app.listen(6969, () => {
  console.log("Server is running on port 6969!");
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  //middleware to handle errors
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
