import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/items/innovance_registration_2024`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch: data.branch,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          roll: data.roll,
          total_fare: data.total_fare,
          txn_id: data.txn_id,
          type: data.type,
          whatsapp: data.whatsapp,
          year: data.year,
        }),
      }
    );

    if (!apiResponse.ok) throw new Error("Failed to register user");

    const result = await apiResponse.json();
    await sendConfirmationEmail(data.email, data.first_name, data.last_name);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
async function sendConfirmationEmail(
  email: string,
  first_name: string,
  last_name: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Registration Successful",
    html: `<p>Dear ${first_name} ${last_name},</p>
           <p>Your registration for Innovance 2024 has been successfully completed.</p>
           <p>Thank you for registering!</p>`,
  };

  await transporter.sendMail(mailOptions);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );

  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/items/innovance_registration_2024/${id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${process.env.TOKEN}` },
      }
    );

    if (!apiResponse.ok) throw new Error("Failed to fetch user data");

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
