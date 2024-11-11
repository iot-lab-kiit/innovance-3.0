import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json({
    success: false,
    message: "Internal server error",
  });

  const { email, otp } = await request.json();
  try {
    const response = await fetch(`${process.env.OTP_URL}/api/otp/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "OTP is incorrect" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
