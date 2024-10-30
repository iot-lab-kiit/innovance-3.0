
import { NextResponse } from "next/server";

export async function POST(request: Request) {
 
  const data = await request.json();
  console.log(data);

  try {
  
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/innovance_registration_2024`, {
      method: "POST",
      headers: { "Authorization": "Bearer jsh9qmQ8e7n_gmWYsbovzm54UIGjaLiu"},
      body: JSON.stringify(data),
    });

    
    if (!apiResponse.ok) {
      throw new Error("Failed to register user");
    }

  
    const result = await apiResponse.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
