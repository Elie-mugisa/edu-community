"use client";

import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

type Props = {
  initialData?: OutputData;
  onChange?: (data: OutputData) => void;
};

export default function Editor({ initialData, onChange }: Props) {
  // const ref = useRef<EditorJS | null>(null);
  // const holderRef = useRef<EditorJS>(null);
  // const [isReady, setIsReady] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [loadin, setLoadin] = useState(false);
  const ref = useRef<EditorJS | null>(null);
  const [successPopPup, setSuccessPopPup] = useState(false);

  // useEffect(() => {
  //   let isMounted = true;

  const initEditor = async () => {
    // if (!holderRef.current || ref.current) return;

    // Dynamic imports (run only in browser)
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Paragraph = (await import("@editorjs/paragraph")).default;
    const List = (await import("@editorjs/list")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const Code = (await import("@editorjs/code")).default;
    const ImageTool = (await import("@editorjs/image")).default;
    //       const LinkTool = (await import("@editorjs/link")).default;
    // const Attaches = (await import("@editorjs/attaches")).default;
    //     const CheckList = (await import("@editorjs/checklist")).default;
    //       const Table = (await import("@editorjs/table")).default;
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          paragraph: Paragraph,
          list: List,
          quote: Quote,
          code: Code,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  // ✅ example: upload to your API (implement it yourself)
                  const formData = new FormData();
                  formData.append("file", file);
                  const res = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/api/upload`,
                    {
                      method: "POST",
                      body: formData,
                    }
                  );
                  const data = await res.json();
                  return { success: 1, file: { url: data.url } };
                },
              },
            },
          },
        },
        data: initialData || undefined,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange?.(data);
        },
        placeholder: "Start writing your post...",
      });
      ref.current = editor;
    }

    // ref.current = editor;
    // await editor.isReady;
    // if (isMounted) setIsReady(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  // initEditor();

  // return () => {
  //   isMounted = false;
  //   ref.current?.destroy();
  //   ref.current = null;
  // };
  // }, [initialData, onChange]);

  // return (
  //   <div className="prose w-full">
  //     <div id="editorjs" className="border rounded-lg p-4 bg-white"></div>
  //     {!isReady && <p className="text-gray-500 text-sm">Loading editor...</p>}
  //   </div>
  // );
}

{
  /* <form action="" className="w-full flex flex-col gap-2 py-4">
              <div className=" w-full   flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Post title"
                  className={`p-2 w-full  border ${
                    state?.errors != null && state?.errors["password"]
                      ? "border-red-500"
                      : "border-[#3832F2]/40"
                  }  outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] rounded-md`}
                />
              </div>
              <div className=" w-full  flex flex-col gap-1">
                <label htmlFor="desc">Description</label>
                <textarea
                  placeholder="Description"
                  name="desc"
                  className={`p-2 w-full  border ${
                    state?.errors != null && state?.errors["password"]
                      ? "border-red-500"
                      : "border-[#3832F2]/40"
                  }  outline-none focus:border-[#3832F2] text-[#111] placeholder:text-[#999] resize-none rounded-md`}
                ></textarea>
              </div>

              <div className="h-[10vh] w-full rounded-md border-2 border-dashed border-[#3832F2]/50 bg-[#3832F2]/10 flex justify-center items-center ">
                <FaImage className="text-5xl text-[#3832F2]/20" />
              </div>

              <div className="w-full  pt-4 flex flex-col gap-2">
                <h2 className="text-xl ">Contenu</h2>

               
              </div>
            </form> */
}
