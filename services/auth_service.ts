"use server";

import { AuthType } from "@/types/auth_type";

export async function creatingAuth(data: AuthType) {
  console.log("AUTH SERVICE --- DATA :: ::", data);

  try {
    const res = await fetch(`${process.env.URL}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data?.name,
        email: data?.email,
        role: data?.role,
        password: data?.password,
        profilePicture: data?.profilePicture,
      }),
    });

    const dataRes = await res?.json();
    console.log(dataRes, " ☑️☑️☑️ :: POST CREATE FROM AUTH SERVICE --- ");

    return dataRes;
  } catch (error) {
    console.log("ERR POST AUTH SERVICE -- ", error);
  }
}

export async function gettingUsers() {
  try {
    const res = await fetch(`${process.env.URL}/api/auth`);
    const data = await res.json();
    console.log(data, " ☑️☑️☑️ :: GET FROM AUTH SERVICE --- ");
    return data;
  } catch (error) {
    console.log("ERR GET SERVICE -- ", error);
  }
}

export async function delettingAuth(userId: string) {
  try {
    const res = await fetch(`${process.env.URL}/api/auth`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId }),
    });

    const dataRes = await res?.json();
    console.log(dataRes, " ☑️☑️☑️ :: DELETE FROM AUTH SERVICE --- ");

    return dataRes;
  } catch (error) {
    console.log("ERR DELETE AUTH SERVICE -- ", error);
  }
}

export async function edittingAuth({
  userId,
  name,
  email,
  role,
  password,
  profilePicture,
}: {
  userId: string;
  name: string;
  email: string;
  role: string;
  password: string;
  profilePicture?: string;
}) {
  try {
    const res = await fetch(`${process.env.URL}/api/auth`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userId,
        name: name,
        email: email,
        role: role,
        password: password,
        profilePicture: profilePicture,
      }),
    });
    // console.log(res, " :: EDITTING USER FROM SERVICE");
    const dataRes = await res?.json();
    console.log(dataRes, " ☑️☑️☑️ :: EDITTING FROM AUTH SERVICE --- ");

    return dataRes;
  } catch (error) {
    console.log("ERR EDIT SERVICE -- ", error);
  }
}
