import { NextResponse } from "next/server";

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
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
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
    console.log(result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
