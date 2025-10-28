"use server";

import { writeFile } from "fs/promises";
import path from "path";

export async function uploadImageAction(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file provided");

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public/uploads", fileName);
  await writeFile(filePath, buffer);

  const url = `/uploads/${fileName}`;
  return { success: 1, file: { url } };
}
