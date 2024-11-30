"use server";
import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://maro:VdrtpPC1WbMd68Mc@cluster0.zclwo.mongodb.net/projects"
    )
    .then(() => {
      console.log("Done Connect To Data base");
    });
};
