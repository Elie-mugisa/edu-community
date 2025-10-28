"use client";

import MyImage from "@/components/image/my_image";
import MyDivider from "@/components/ui/my_divider";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useActionState, useState } from "react";

import { logAuth } from "@/action/auth";

import {
  MdAlternateEmail,
  MdOutlinePassword,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

const initialState = {
  email: "",
  password: "",
  errors: {},
} as any;

export default function SignIn() {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [state, action, isPending] = useActionState(logAuth, initialState);

  const t = useTranslations("auth");
  return (
    <div className=" justify-center items-end min-h-screen flex bg-[#1C578F] ">
      <div className=" hidden w-[70%]   lg:flex ">
        <MyImage alt="" imgPath="/images/o1.jpg" />
      </div>

      {/* //? FORM */}
      <div className=" w-full lg:w-[30%] h-screen bg-white flex flex-col justify-center items-center gap-8 ">
        {/* //? header */}
        <div className="flex flex-col gap-2 w-full text-center px-10 lg:px-[5vw] ">
          <h1 className=" text-2xl font-semibold text-[#111] lg:text-3xl ">
            {t("signIn.title")}
          </h1>
          <p className="text-lg text-[#999] ">{t("signIn.para")}</p>
        </div>

        {/* //? Formular */}
        <form
          action={action}
          className=" w-full px-10 flex flex-col gap-4 lg:mt-[5vh] "
        >
          {/*  EMAIL */}
          <div className=" relative flex items-center   rounded-md  w-full">
            <input
              type="text"
              name="email"
              placeholder={`${t("input.mail")}`}
              className="p-3 pl-14 w-full border border-[#3832F2]/40 outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md
            "
            />
            <div className="absolute left-2 flex gap-2 items-center ">
              <MdAlternateEmail className="text-[#111] text-2xl " />
              <MyDivider className="h-5 bg-[#111]" />
            </div>
          </div>

          {/*  PASS */}
          <div className=" relative flex items-center   rounded-md  w-full">
            <input
              type={isVisiblePass ? "text" : "password"}
              placeholder="*** *** "
              name="password"
              className="p-3 pl-14 w-full border border-[#3832F2]/40 outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md
                     "
            />
            <div className="absolute left-2 flex gap-2 items-center ">
              <MdOutlinePassword className="text-[#111] text-2xl " />
              <MyDivider className="h-5 bg-[#111]" />
            </div>
            {/* visibility */}
            {isVisiblePass ? (
              <MdVisibilityOff
                onClick={() => setIsVisiblePass(!isVisiblePass)}
                className="absolute top-2.5 right-2 text-2xl cursor-pointer "
              />
            ) : (
              <MdVisibility
                onClick={() => setIsVisiblePass(!isVisiblePass)}
                className="absolute top-2.5 right-2 text-2xl cursor-pointer "
              />
            )}
          </div>

          <div className="flex flex-col w-full rounded-sm gap-1 font-medium text-red-500">
            {state?.errors &&
              state?.errors["email"] != null &&
              state?.errors["email"] && (
                <p className="text-xs  md:text-sm ">{state?.errors["email"]}</p>
              )}
            {state?.errors &&
              state?.errors["password"] != null &&
              state?.errors["password"] && (
                <p className="text-xs  md:text-sm ">
                  {state?.errors["password"]}
                </p>
              )}
          </div>

          {/* //? BTN */}
          <div className="py-8 w-full flex flex-col gap-4 items-end justify-center ">
            <button
              type="submit"
              className="bg-gradient-to-r py-1.5  from-[#3832F2]  to-[#c648f8] w-full font-semibold transition-all duration-300 text-white  hover:opacity-80 rounded-full md:px-14 lg:py-2 "
            >
              {isPending ? (
                <div className="flex justify-center gap-2">
                  {/* <span>{t("load")}</span> */}
                  <span className="animate-spin rounded-full h-5 w-5 border-b-3 border-white " />
                </div>
              ) : (
                `${t("signIn.title")}`
              )}
            </button>
            <div>
              {t("signIn.haveAccount")}
              <Link href={"/signUp"} className="text-[#c648f8]">
                {t("signUp.title")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
