import connectDB from "@/lib/db_conn";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("USER POST");

  try {
    await connectDB();

    const body = await req.json();

    const user = await User.create(body);

    return NextResponse.json(
      {
        success: true,
        user,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.log("CANNOT CREATE USER ❌ :: ", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ? GETTING USERS
export async function GET() {
  console.log("GETTTTTING USERS ");

  try {
    await connectDB();

    const users = await User.find().sort({ _id: -1 });
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ? DELETING USERS
export async function DELETE(req: Request) {
  console.log("DELETING USERS ");
  try {
    await connectDB();

    const { id } = await req.json();

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "User deleted" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ? UPDATING USERS
export async function PUT(req: Request) {
  try {
    await connectDB();

    const { id, ...data } = await req.json();

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
