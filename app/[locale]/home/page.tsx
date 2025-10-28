"use client";

import AsideRightSection from "./homeComponents/aside_right_section";
import { PiBookBookmarkFill, PiHandsClapping } from "react-icons/pi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { AiFillPicture } from "react-icons/ai";
import MyDivider from "@/components/ui/my_divider";
import { IoIosBookmark } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import { RiQuillPenAiFill } from "react-icons/ri";
import { useActionState, useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaHome, FaImage } from "react-icons/fa";

import { OutputData } from "@editorjs/editorjs";

import { RiHome5Fill } from "react-icons/ri";

import { IoLibrary, IoPerson } from "react-icons/io5";
import MyTextEditor from "@/components/ui/my_text_editer";
import { creatingPost } from "@/services/post_service";
import { PostType } from "@/types/post_type";

const initialState = {
  title: "",
  description: "",
  content: {},
  errors: {},
} as any;

export default function HomePage() {
  const [modalAdd, setModalAdd] = useState(false);
  const [err, setErr] = useState(false);
  const [content, setContent] = useState({});
  const [state, action, isPending] = useActionState(() => {}, initialState);

  const [data, setData] = useState<OutputData>();

  const [saving, setSaving] = useState(false);

  console.log("DATA --> ", data);

  return (
    <div className="min-h-screen w-full relative flex justify-center items-start  ">
      {/* <div className="hidden  md:w-[30vw] md:block " /> */}

      {/* // ? MAIN SECTION */}
      <div className="flex flex-col pt-[10vh] justify-start gap-2 px-2 py-8 md:pt-[10vh] lg:px-[10vw] w-full md:w-[75vw] lg:w-[60vw]  ">
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
        {/* //? MODAL ADDING POST */}
        <div
          onClick={(e) => {
            if (e.currentTarget == e.target) {
              setModalAdd(!modalAdd);
            }
          }}
          className={`transition-all z-10 backdrop-blur-xs duration-300 fixed top-0 left-0 h-screen w-full flex justify-center items-end pb-[5vh] bg-[#111]/50  ${
            modalAdd
              ? " pointer-events-auto opacity-100 "
              : "pointer-events-none opacity-0 "
          } `}
        >
          <div
            className={`bg-white duration-200 border-t-8 flex flex-col gap-4 border-[#3832F2] transition-all  h-[88vh] lg:h-[80vh] relative rounded-sm p-4 w-[90vw] md:w-[60vw] lg:w-[40vw] ${
              modalAdd
                ? " translate-y-0 opacity-100 "
                : " -translate-y-full opacity-0 "
            } `}
          >
            <div className="text-xl text-gray-500 md:text-2xl">
              <h2 className="">Start write something </h2>
            </div>

            <form
              action={async (formData) => {
                const title = formData.get("title")?.toString() ?? "";
                if (title.trim() == "" || title.length == 0) {
                  setErr(true);
                  setSaving(false);
                  return;
                }

                const dataF: PostType = {
                  title: title,
                  content: data as OutputData,
                };

                try {
                  const res = await creatingPost(dataF);
                  console.log("DATA FORM ::: ", dataF);
                  console.log("DATA RES ::: ", res);

                  setSaving(false);
                } catch (error) {
                  console.log("The error form client ::: ", error);
                  setSaving(false);
                }
              }}
              className="flex flex-col gap-1"
            >
              {/* //? CONTENT EDITOR */}
              <div className=" relative flex  flex-col  rounded-md  w-full">
                <input
                  type="text"
                  name="title"
                  placeholder={`The title`}
                  className={`p-2 w-full border ${
                    err ? "border-red-500" : "border-[#3832F2]/40 "
                  } outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md`}
                />
                {err && (
                  <p className="text-red-500 text-sm text-start ">
                    Title est obligatoir
                  </p>
                )}
              </div>

              <MyTextEditor data={data} onChange={setData} />

              {/* //? SAVE BTN */}
              <button
                type="submit"
                onClick={() => {
                  setSaving(true);
                  // console.log("DATA FORM ::: ", data);
                  // console.log("YOU JST CLICK");
                }}
                className=" w-full bg-[#3832F2] text-white flex justify-center items-center  text-lg py-2 text-center duration-200 transition-all cursor-pointer z-30 md:text-xl hover:opacity-70 "
              >
                {saving ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-b-3 border-[#ffffff]"></div>
                ) : (
                  <p>Save</p>
                )}
              </button>
            </form>

            {/* <pre className="mt-6 p-3 bg-gray-100 rounded text-sm overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre> */}

            {/* //? Cancel btn */}
            <MdCancel
              onClick={() => setModalAdd(!modalAdd)}
              className="text-2xl cursor-pointer transition-all duration-200 absolute top-2 right-2 text-slate-700 md:text-3xl hover:scale-108 hover:text-[#c648f8] "
            />
          </div>
        </div>
        ,{/* //?MENU MOBILE */}
        <div className="fixed bottom-0 left-0 w-full h-[4rem] pb-2  flex justify-between items-center px-[1rem] border-t border-t-gray-200 bg-white dark:bg-sky-950 md:justify-start md:gap-6 lg:hidden ">
          <div className="h-full  pt-3 flex flex-col justify-center items-center ">
            <span className="">
              <RiHome5Fill className="text-4xl text-[#666]" />
            </span>
            <p className="text-xs text-[#666] ">Home</p>
          </div>
          <div className="h-full  pt-3 flex flex-col justify-center items-center ">
            <span className="">
              <IoLibrary className="text-4xl text-[#666]" />
            </span>
            <p className="text-xs text-[#666] ">Library</p>
          </div>
          <div className="h-full  pt-3 flex flex-col justify-center items-center ">
            <span className="">
              <IoLibrary className="text-4xl text-[#666]" />
            </span>
            <p className="text-xs text-[#666] ">Library</p>
          </div>
          <div className="h-full  pt-3 flex flex-col justify-center items-center ">
            <span className="">
              <IoPerson className="text-4xl text-[#666]" />
            </span>
            <p className="text-xs text-[#666] ">Profile</p>
          </div>
        </div>
      </div>

      <div className="hidden w-[25vw] md:block " />

      {/* //? ASIDE RIGHT HERE BELOW */}
      <AsideRightSection />

      {/* //? BTN ADD */}
      <div
        onClick={() => setModalAdd(true)}
        className="bg-linear-to-br  from-[#c648f8] to-[#3832F2] h-[8vh] w-[8vh] rounded-full flex justify-center items-center flex-col cursor-pointer fixed bottom-[5vh] right-[4vw] transition-all duration-300 text-white hover:scale-110 "
      >
        <RiQuillPenAiFill className="text-white text-2xl md:text-3xl" />
        <p>Ecrire</p>
      </div>
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
