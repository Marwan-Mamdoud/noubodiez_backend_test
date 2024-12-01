"use server";
import jwt from "jsonwebtoken";
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

// export const isAuth = async () => {
//   const cookieStore = cookies();
//   const token = (await cookieStore).get("jwt")?.value;
//   // jwt.sign("fasdfsdfaf", 10);
//   // const decode = jwt.verify(token, "DSKFAJW45348RU9834545SHF;LKFJAS'DPJ$@%@#$");
//   console.log(token, "dasfsd");

//   // return decode;
// };
