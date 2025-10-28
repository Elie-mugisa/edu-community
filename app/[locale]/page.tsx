import MyImage from "@/components/image/my_image";
import LanguageSwitcher from "@/components/langSwitcher/lang_switcher";
import MyDivider from "@/components/ui/my_divider";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { RiLightbulbFlashFill } from "react-icons/ri";
import { PiStudentThin } from "react-icons/pi";
import { IoLibrary } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";

export default function Home() {
  const t = useTranslations("onBoard.welcome");
  const w = useTranslations("onBoard");
  return (
    <div className="min-h-screen flex flex-col relative items-center bg-white dark:bg-sky-950 ">
      {/* //? header */}
      <Header_ />

      {/* action */}
      <div className="flex min-h-[140vh]  lg:min-h-[120vh]  w-full flex-col justify-end items-center px-4 py-4 gap-4 md:px-10 lg:gap-4 lg:px-[5vw]  ">
        {/* // ? TEXT BOX */}
        <div className="w-full flex flex-col gap-8 items-center h-full    ">
          <div className="w-[80vw] flex flex-col items-center gap-4  md:w-[60vw] lg:w-[30vw] ">
            <h2 className="text-2xl font-bold text-center text-[#111] lg:text-3xl ">
              {t("2")}
            </h2>
            <MyDivider className="bg-gradient-to-r from-[#3832F2]  to-[#c648f8] w-[20vw] h-[1px] lg:w-[10vw] " />
            <h1 className="text-3xl font-bold text-transparent text-center  bg-clip-text bg-gradient-to-r from-[#3832F2] via-[#7BC8FF] to-[#7BC8FF] lg:text-5xl lg:leading-14">
              {w("title")}
            </h1>
          </div>
          <div className="flex items-center gap-4 flex-col lg:w-[40vw] ">
            <RiLightbulbFlashFill className="text-2xl lg:text-4xl text-[#ffbc2b] " />
            <MyDivider className="h-[1px] w-[10vw]  " />
            <p className="text-[#999] text-xl text-center ">{w("desc")}</p>
          </div>

          {/* //? BTN */}
          <Link
            href={"/signIn"}
            className="px-5 py-1.5 flex items-center gap-4 bg-gradient-to-r  from-[#3832F2]  to-[#c648f8] transition-all duration-300 text-white  hover:opacity-80 rounded-full md:px-8 lg:py-2  "
          >
            {w("getStarted")}
            <MyDivider className="h-5 w-[1px] bg-white " />
            <PiStudentThin className="text-xl" />
          </Link>
        </div>

        {/* //? PICTURES SECTION */}

        <div className="w-full relative flex flex-col items-start  pt-[8vh] overflow-hidden  lg:h-[55vh] ">
          <div className="w-full h-full  relative  -rotate-5 grid gap-2 grid-cols-5  px-[3vw] lg:px-[3vw] ">
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] ">
              <MyImage alt="" imgPath="/images/l1.jpg" />
            </div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] ">
              <MyImage alt="" imgPath="/images/l2.webp" />
            </div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] ">
              <MyImage alt="" imgPath="/images/l3.webp" />
            </div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
            <div className="bg-slate-100 rounded-md   h-[10vh]  md:h-[20vh] "></div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-white/70 via-transparent  to-white/90  " />
        </div>
      </div>
    </div>
  );
}

function Header_() {
  const t = useTranslations("onBoard.welcome");

  return (
    <div className=" w-full flex gap-4 justify-between fixed top-0 left-0 bg-white/60 backdrop-blur-xs dark:bg-sky-950 items-center py-4 px-4 lg:px-[5vw]">
      <div className="flex gap-4 items-center ">
        <LanguageSwitcher className="hidden md:flex " />
        <p className="text-[#111] dark:text-white ">{t("1")}</p>
        <MyDivider className="h-4" />
        <p className="font-bold">EduApp</p>
      </div>
      {/* auth action */}
      <div className="flex gap-4 items-center ">
        <Link
          href={"/signIn"}
          className="py-1.5 font-base rounded-md text-white bg-[#c648f8] px-4 transition-all duration-200 lg:py-2 lg:px-6 hover:opacity-80 "
        >
          {t("signIn")}
        </Link>
        <Link
          href={"/signUp"}
          className="border border-[#3832F2] rounded-md px-4 transition-all duration-200 lg:py-2 lg:px-6 hover:bg-[#3832F2] hover:text-white py-1.5 font-base "
        >
          {t("signUp")}
        </Link>
      </div>
    </div>
  );
}

//  <div className="w-full relative flex flex-col items-start  lg:w-[50%] lg:h-[70vh] ">
//         <div className="flex gap-4">
//           {/* // ? box 1 *
//           <div className="h-[25vh] w-[25vw] rounded-md shadow-[#7BC8FF]/30 relative shadow-xl">
//             <MyImage alt="" imgPath="/images/l1.jpg" />

//             <div className="absolute -top-12 -left-[8vw] bg-white shadow-2xl shadow-[#7BC8FF]/60 p-1 flex gap-2 rounded-md ">
//               <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-sm bg-gradient-to-br from-[#3832F2] to-[#7BC8FF] text-white">
//                 <IoLibrary />
//               </div>
//               <div>
//                 <h4>{w("images_text.box1.title")}</h4>
//                 <div className="w-[50vw] lg:w-[20vw] ">
//                   <p className="text-sm text-[#999] ">
//                     {w("images_text.box1.desc")} <MyImage alt="" imgPath="/images/l1.jpg" />
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* // ? box 3 *
//           <div className="w-[15vw] overflow-hidden rounded-md shadow-[#3832F2]/20 shadow-xl  -translate-y-[10vh]">
//             <div className=" h-[20vh] ">
//               <MyImage alt="" imgPath="/images/l3.webp" />
//             </div>
//             <div className="px-4 pt-1 pb-2 w-full  ">
//               <h3 className="font-semibold">{w("images_text.box3.title")}</h3>
//               <p className="text-xs text-[#999]">
//                 {w("images_text.box3.desc")}
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* // ? box 2 *
//         <div className="h-[25vh] w-[25vw] translate-x-[5vw] relative -translate-y-[4vh] rounded-md bg-blue-500 shadow-[#3832F2]/20 shadow-xl ">
//           <MyImage alt="" imgPath="/images/l2.webp" />

//           <div className="absolute -bottom-12 -right-[8vw] bg-white shadow-2xl shadow-[#3832F2]/40 p-1 flex gap-2 rounded-md ">
//             <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-sm bg-gradient-to-br from-[#3832F2] to-[#7BC8FF] text-white">
//               <GiNewspaper />
//             </div>
//             <div>
//               <h4>{w("images_text.box2.title")}</h4>
//               <div className="w-[50vw] lg:w-[20vw] ">
//                 <p className="text-sm text-[#999] ">
//                   {w("images_text.box2.desc")}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
