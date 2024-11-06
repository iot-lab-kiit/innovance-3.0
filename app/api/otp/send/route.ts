import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, rollNo } = await request.json();
  try {
    const response = await fetch(
      `${process.env.OTP_URL}/api/otp/send`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, rollNo }),
      }
    );
    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to send OTP",
      });
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
