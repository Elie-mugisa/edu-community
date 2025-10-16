"use client";

import MyDivider from "@/components/ui/my_divider";

import { RiHome5Fill } from "react-icons/ri";
import AsideLink from "./asideLink/aside_link";
import { IoLibrary } from "react-icons/io5";

const colors = {
  blue: "#3832F2",
  lightBlue: "#7BC8FF",
  purple: "#c648f8",
};

export default function AsideMenu() {
  return (
    <div className="hidden h-screen w-[15vw] p-4 fixed top-[10vh] left-0 flex-col gap-8  lg:flex  ">
      {/* //? LINKS */}
      <div className=" flex flex-col gap-2 ">
        <AsideLink url="/home" Icon={RiHome5Fill} label="Home" />
        <MyDivider className="h-[1px] my-4  bg-[#3832F2]/10 w-full" />
        <AsideLink url="/home/library" Icon={IoLibrary} label="Library" />
      </div>
    </div>
  );
}
