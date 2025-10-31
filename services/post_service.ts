"use server";

import { PostType } from "@/types/post_type";

export async function creatingPost({ title, content }: PostType) {
  console.log("POST SERVICE --- DATA :: ::", title, content);

  try {
    const res = await fetch(`${process.env.URL}/api/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    const dataRes = await res?.json();
    console.log(dataRes, " ☑️☑️☑️ :: POST CREATED  SERVICE --- ");

    return dataRes;
  } catch (error) {
    console.log("ERR POST create SERVICE -- ", error);
  }
}
