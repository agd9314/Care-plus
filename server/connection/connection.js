import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DATABASE_URL)

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.DATABASE_URL);
     console.log("Database connected");
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default connectDB;