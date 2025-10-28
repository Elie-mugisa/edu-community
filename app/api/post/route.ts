import connectDB from "@/lib/db_conn";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Posting Post ");

  try {
    await connectDB();
    const body = await req.json();

    const post = await Post.create(body);
    return NextResponse.json(
      {
        success: true,
        post,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
