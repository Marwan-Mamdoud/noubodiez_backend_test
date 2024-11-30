import { connectDB } from "../connectToDB";
import User from "../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB(); // Connect to the database
    const body = await req.json(); // Parse request body
    // const result = await createUser(body); // Create user
    const { email, password } = body;
    const hashPass = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashPass });
    await user.save();
    return new Response(
      JSON.stringify({ user, success: true, message: "Done Create User" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error, "error eorror");

    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}
