import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const apiResponse = await fetch(`${process.env.OTP_URL}/api/email/verify`, {
      method: "POST",
      headers: {
        token: `${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    });

    if (!apiResponse.ok) throw new Error("Failed to verify user");

    const result = await apiResponse.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
