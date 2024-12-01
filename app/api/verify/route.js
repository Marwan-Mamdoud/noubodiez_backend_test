import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  console.log(token, "token");

  if (!token) {
    return new Response(
      JSON.stringify({ error: "No token provided", success: false }),
      {
        status: 401,
      }
    );
  }

  try {
    // Verify the token
    const decoded = jwt.verify(
      token,
      "DSKFAJW45348RU9834545SHF;LKFJAS'DPJ$@%@#$"
    );

    return new Response(
      JSON.stringify({
        message: "Access granted",
        data: decoded,
        success: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid or expired token", success: false }),
      {
        status: 401,
      }
    );
  }
}
