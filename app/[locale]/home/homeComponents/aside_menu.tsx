"use client";

import MyDivider from "@/components/ui/my_divider";

import { RiHome5Fill } from "react-icons/ri";
import AsideLink from "./asideLink/aside_link";
import { IoLibrary } from "react-icons/io5";
import { logout } from "@/action/auth";
import { BiLogOut } from "react-icons/bi";

const colors = {
  blue: "#3832F2",
  lightBlue: "#7BC8FF",
  purple: "#c648f8",
};

export default function AsideMenu() {
  return (
    <div className="hidden h-screen w-[15vw] p-4 fixed top-[10vh] left-0 flex-col gap-8  lg:flex  ">
      {/* //? LINKS */}
      <div className=" flex flex-col gap-4  retive justify-between ">
        <div className="flex flex-col gap-4 ">
          <AsideLink url="/home" Icon={RiHome5Fill} label="Home" />
          {/* <MyDivider className="h-[1px] my-4  bg-[#3832F2]/10 w-full" /> */}
          <AsideLink url="/home/library" Icon={IoLibrary} label="Library" />
        </div>

        <form
          action={logout}
          className={`flex w-full  cursor-pointe   x-8 py-2 items-center transition-all duration-300 gap-4 rounded-l-md  group `}
        >
          <div className="w-full cursor-pointer hover:bg-[#3832F2]/10 py-2 transition-all duration-300 ">
            <button className="flex w-full gap-4 items-center">
              <BiLogOut
                className={` transition-all duration-300  
          
             text-3xl text-[#3832F2]
             
         `}
              />

              <span
                className={`text-xl  
        text-[#3832F2]
           "
         `}
              >
                Se deconnecter
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
