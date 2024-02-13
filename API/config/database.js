import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successfully");
    })
    .catch((error) => {
      console.error("DB connection failed", error);
      process.exit(1);
    });
};

export default dbconnect;
