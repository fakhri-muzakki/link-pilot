import getToken from "@/lib/getToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await getToken();
    const body = await request.json();

    const { customAlias } = body;

    if (!customAlias) {
      return NextResponse.json(
        {
          success: false,
          message: "originalUrl is required",
        },
        { status: 400 },
      );
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/links/click`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        method: "POST",
        body: JSON.stringify({ alias: customAlias }),
      },
    );

    if (!res.ok) {
      throw new Error("");
    }

    return NextResponse.json(
      {
        success: true,
        // data: newLink,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body",
      },
      { status: 500 },
    );
  }
}
