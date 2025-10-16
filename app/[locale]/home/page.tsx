import AsideRightSection from "./homeComponents/aside_right_section";
import { PiBookBookmarkFill, PiHandsClapping } from "react-icons/pi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { AiFillPicture } from "react-icons/ai";
import MyDivider from "@/components/ui/my_divider";
import { IoIosBookmark } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative flex justify-center items-start  ">
      {/* <div className="hidden  md:w-[30vw] md:block " /> */}

      {/* // ? MAIN SECTION */}
      <div className="flex flex-col justify-start gap-2 px-2 py-8 md:pt-[10vh] lg:px-[10vw] w-full md:w-[75vw] lg:w-[60vw]  ">
        {/* searc */}
        <SearchSection />
        <div className="p-4 rounded-md bg-white flex flex-col gap-2 ">
          {/* header post */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-100"></div>
            {/* Text */}
            <div>
              <h2 className="text-[16px] md:text-[18px] font-semibold text-[#111]">
                User name
              </h2>
              <p className="text-base text-[#999] ">exemple@gmail.com</p>
            </div>
          </div>
          {/* text */}
          <div className=" text-[#555] text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            eum corporis eveniet facere at et, doloribus nemo quae, accusamus
            rerum in totam eaque esse libero adipisci sunt assumenda excepturi
            possimus.
          </div>
          {/* image */}
          <div className="min-h-[30vh] rounded-sm w-full bg-slate-50 flex justify-center items-center ">
            <AiFillPicture className="text-4xl md:text-9xl text-slate-200" />
          </div>
          <MyDivider className="bg-slate-100 w-full h-[1px]  " />
          <div className="flex justify-between items-center">
            <div className="flex w-[80%] ">
              <div className="flex flex-[1] justify-center gap-2 items-center transition-all duration-200 p-2 rounded-md cursor-pointer hover:bg-slate-100 ">
                <PiHandsClapping className="text-slate-400 text-xl md:text-2xl" />
                <p className="text-lg ">221</p>
              </div>
              <div className="flex flex-[1] justify-center gap-2 items-center transition-all duration-200 p-2 rounded-md cursor-pointer hover:bg-slate-100 ">
                <TfiCommentAlt className="text-slate-400 text-xl md:text-2xl" />
                <p className="text-lg ">43</p>
              </div>
            </div>

            <IoIosBookmark className="text-[#111] text-xl md:text-2xl" />
          </div>
        </div>
      </div>

      <div className="hidden w-[25vw] md:block " />

      {/* //? ASIDE RIGHT HERE BELOW */}
      <AsideRightSection />
    </div>
  );
}

function SearchSection() {
  return (
    <div className="py-1.5 md:py-2 px-2 w-full bg-white rounded-md flex flex-col gap-2 ">
      <form action="" className="w-full">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search a post.."
            className="p-2 w-full outline-none border border-[#3832F2]/10 rounded-md focus:border-[#3832F2] "
          />
        </div>
      </form>
      <div className="flex  gap-4 md:gap-6 items-center">
        <div className="flex flex-[1] justify-center gap-2 items-center transition-all duration-200 p-2 rounded-md cursor-pointer hover:bg-slate-100 ">
          <PiBookBookmarkFill className="text-[#3832F2] text-xl md:text-2xl" />
          <p className="text-lg md:text-xl">Check Books</p>
        </div>
        <div className="flex flex-[1] justify-center gap-2 items-center transition-all duration-200 p-2 rounded-md cursor-pointer hover:bg-slate-100 ">
          <LiaPhotoVideoSolid className="text-[#327ff2] text-xl md:text-2xl" />
          <p className="text-lg md:text-xl">Watch Videos</p>
        </div>
        <div className="flex flex-[1] justify-center gap-2 items-center transition-all duration-200 p-2 rounded-md cursor-pointer hover:bg-slate-100 ">
          <AiFillPicture className="text-pink-500 text-xl md:text-2xl" />
          <p className="text-lg md:text-xl">See Pictures</p>
        </div>
      </div>
    </div>
  );
}
