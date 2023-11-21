import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { DB_host: uriDb } = process.env;

export async function connectDb() {
  try {
    await mongoose.connect(uriDb);
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
}
export async function disconnectDb() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
}
