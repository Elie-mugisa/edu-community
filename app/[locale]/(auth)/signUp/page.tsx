"use client";
import MyImage from "@/components/image/my_image";
import MyDivider from "@/components/ui/my_divider";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import {
  MdAlternateEmail,
  MdOutlinePassword,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default function SignUp() {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleConfPass, setIsVisibleConfPass] = useState(false);

  const t = useTranslations("auth");

  return (
    <div className=" justify-center items-end min-h-screen flex bg-[#1D7E9D] ">
      <div className=" hidden w-[70%]   lg:flex ">
        <MyImage alt="" imgPath="/images/o2.jpg" />
      </div>

      {/* //? FORM */}
      <div className=" w-full lg:w-[30%] h-screen bg-white flex flex-col justify-center items-center gap-8 ">
        {/* //? header */}
        <div className="flex flex-col gap-2 w-full text-center px-10 lg:px-[5vw] ">
          <h1 className=" text-2xl font-semibold text-[#111] lg:text-3xl ">
            {t("signUp.title")}
          </h1>
          <p className="text-lg text-[#999] ">{t("signUp.para")}</p>
        </div>

        {/* //? Formular */}
        <form
          action=""
          className=" w-full px-10 flex flex-col gap-4 lg:mt-[5vh] "
        >
          {/*  NAME */}
          <div className=" relative flex items-center   rounded-md  w-full">
            <input
              type="text"
              placeholder={`${t("input.name")}`}
              className="p-3 w-full border border-[#3832F2]/40 outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md
            "
            />
          </div>

          {/*  EMAIL */}
          <div className=" relative flex items-center   rounded-md  w-full">
            <input
              type="text"
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

          {/* CONFIRM PASS */}
          <div className=" relative flex items-center   rounded-md  w-full">
            <input
              type={isVisibleConfPass ? "text" : "password"}
              placeholder={`${t("input.confirm")}`}
              className="p-3 pl-14 w-full border border-[#3832F2]/40 outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md
            "
            />
            <div className="absolute left-2 flex gap-2 items-center ">
              <MdOutlinePassword className="text-[#111] text-2xl " />
              <MyDivider className="h-5 bg-[#111]" />
            </div>
            {/* visibility */}
            {isVisibleConfPass ? (
              <MdVisibilityOff
                onClick={() => setIsVisibleConfPass(!isVisibleConfPass)}
                className="absolute top-2.5 right-2 text-2xl cursor-pointer "
              />
            ) : (
              <MdVisibility
                onClick={() => setIsVisibleConfPass(!isVisibleConfPass)}
                className="absolute top-2.5 right-2 text-2xl cursor-pointer "
              />
            )}
          </div>

          {/* //? BTN */}
          <div className="py-8 w-full flex flex-col gap-4 items-end justify-center ">
            <button className="bg-gradient-to-r py-1.5  from-[#3832F2]  to-[#c648f8] w-full font-semibold transition-all duration-300 text-white  hover:opacity-80 rounded-full md:px-14 lg:py-2 ">
              {t("signUp.title")}
            </button>
            <div>
              {t("signUp.haveAccount")}
              <Link href={"/signIn"} className="text-[#c648f8]">
                {t("signIn.title")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
