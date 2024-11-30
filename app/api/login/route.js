import { connectDB } from "../connectToDB";
import User from "../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins (for testing purposes)
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    await connectDB(); // Connect to the database
    const body = await req.json(); // Parse request body
    const { email, password } = body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return new Response(
        JSON.stringify(
          { success: false, message: "No User with that Email" },
          { headers }
        ),
        {
          status: 500,
        }
      );
    }
    console.log(existUser, "user user");

    const passRight = await bcrypt.compare(password, existUser.password);

    if (passRight == false) {
      console.log(passRight, "password compare");
      return new Response(
        JSON.stringify(
          { success: false, message: "Wrong passowrd" },
          { headers }
        ),
        {
          status: 401,
        }
      );
    } else {
      return new Response(
        JSON.stringify({ user: existUser, success: true }, { headers }),
        {
          status: 201,
        }
      );
    }
  } catch (error) {
    console.log(error, "error eorror");

    return new Response(
      JSON.stringify({ success: false, message: error }, { headers }),
      {
        status: 500,
      }
    );
  }
}
