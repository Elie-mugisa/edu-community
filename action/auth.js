"use server";

import connectDB from "@/lib/db_conn";
import { signInSchema, signUpSchema } from "../lib/rule";
import { createSession } from "../lib/session";
import {
  creatingAuth,
  edittingAuth,
  gettingUsers,
  delettingAuth,
} from "../services/auth_service";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createAuth(state, formData) {
  // ? VALIDATION THE FORM
  const validatedFields = signUpSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    role: formData.get("role")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
    profilePicture: formData.get("profilePicture")?.toString() ?? "",
  });

  // ? SENDING ERROR IF GOT
  if (!validatedFields.success) {
    const fieldErrors = {};

    validatedFields.error.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(issue.message);
        // console.log( issue);
      }
    });

    console.log("D A T A -- E R R O R :::: ", fieldErrors);

    return {
      errors: fieldErrors,
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
    };
  }

  await connectDB();

  // ? RETREIVING DATA FORM FORM
  const { name, email, role, password, profilePicture } = validatedFields.data;

  const existingUser = await User.findOne({ email });

  if (existingUser)
    return {
      errors: { email: "This user already exist" },
    };

  // ? Hashing the password
  const hashedPass = await bcrypt.hash(password, 10);

  const res = await creatingAuth({
    name,
    email,
    role,
    password: hashedPass,
    profilePicture,
  });

  if (res.success) {
    revalidatePath("/");
    redirect("/home/");
  }

  return {
    success: false,
    message: "L'Utlisateur n'a pas ete cree!",
  };
}

export async function logAuth(state, formData) {
  console.log("LOGININ AUTH ON PROCESS...");

  const validatedFields = signInSchema.safeParse({
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  });

  // ? SENDING ERROR IF GOT
  if (!validatedFields.success) {
    const fieldErrors = {};

    validatedFields.error.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(issue.message);
        // console.log( issue);
      }
    });

    console.log("D A T A -- E R R O R :::: ", fieldErrors);

    return {
      errors: fieldErrors,
    };
  }

  await connectDB();

  const { email, password } = validatedFields.data;

  const existingUser = await User.findOne({ email });
  if (!existingUser)
    return {
      errors: { email: "User not found" },
    };

  //checking password
  const matchedPassword = await bcrypt.compare(password, existingUser.password);

  if (!matchedPassword)
    return {
      errors: { email: "User not found" },
    };

  //Creating session
  await createSession({
    id: existingUser._id.toString(),
    name: existingUser.name,
    role: existingUser.role,
  });

  console.log(existingUser);

  redirect("/home");
}

export async function getAuth() {
  const data = gettingUsers();

  return data;
}

// ? DELETING AUTH
export async function deleteAuth(authId) {
  console.log("DELETING auth ID --> ", authId);

  try {
    const res = await delettingAuth(authId);
    return res;
  } catch (error) {
    console.log(
      "Something went wrong when deleting auth --> ERRORR :: ",
      error
    );
  }

  //  const res = await
}

// ? LOGGIN OUT
export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  redirect("/");
}

//? UPDATE AUTH
export async function updateAuth(state, formData) {
  // ? VALIDATION THE FORM

  const validatedFields = signUpSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    role: formData.get("role")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
    profilePicture: formData.get("profilePicture")?.toString() ?? "",
  });

  const userIdd = formData.get("authId")?.toString() ?? "";

  // ? SENDING ERROR IF GOT
  if (!validatedFields.success) {
    const fieldErrors = {};

    validatedFields.error.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(issue.message);
        // console.log( issue);
      }
    });

    console.log("D A T A -- E R R O R :::: ", fieldErrors);

    return {
      errors: fieldErrors,
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
    };
  }

  // ? RETREIVING DATA FORM FORM
  const { name, email, role, password } = validatedFields.data;

  const hashedPass = await bcrypt.hash(password, 10);

  const res = await edittingAuth(userIdd, name, email, role, hashedPass);

  if (res.success) {
    return {
      success: true,
      message: "L'Utilisateur modifier avec succée!",
    };
  }

  return { errors: { message: "Erreur serveur, verifier la connexion" } };
}
