import mongoose from "mongoose";
import { Env_Consts } from "../constants/envConsts.js";

const connectDB = async () => {
  try {
     if (!Env_Consts.CONNECTION_STRING) {
            throw new Error("Connection string is not defined in the environment variables.");
        }

    await mongoose.connect(Env_Consts.CONNECTION_STRING);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;