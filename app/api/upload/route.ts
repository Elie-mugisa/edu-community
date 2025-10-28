import { NextResponse } from "next/server";

// ✅ This is a demo route. In production, you'd save to S3, Cloudinary, etc.
export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) {
    return NextResponse.json({ success: 0, error: "No file provided" });
  }

  // Convert file to base64 just for demo (you can upload to a real server here)
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");
  const mimeType = file.type;

  const url = `data:${mimeType};base64,${base64}`;

  return NextResponse.json({
    success: 1,
    file: {
      url, // 👈 Editor.js expects this key
    },
  });
}

// import { NextResponse } from "next/server";

// import { uploadImageAction } from "@/action/uploadImage";

// export async function POST(req: Request) {
//   console.log("U P L O A D I N G  F I L E");

//   try {
//     const formData = await req.formData();
//     // const file = formData.get("file") as File;
//     // const bytes = await file.arrayBuffer();
//     // const buffer = Buffer.from(bytes);

//     // const filePath = path.join(process.cwd(), "public/uploads", file.name);
//     // await writeFile(filePath, buffer);
//     // const url = `/uploads/${file.name}`;

//     // return NextResponse.json({ url });

//     const res = await uploadImageAction(formData);
//     return NextResponse.json({ success: true, res });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }
