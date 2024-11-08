import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, rollNo } = await request.json();
  try {
    const response = await fetch(`${process.env.OTP_URL}/api/otp/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, rollNo }),
    });

    return NextResponse.json(await response.json());
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
