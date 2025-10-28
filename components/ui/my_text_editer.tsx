"use client";

import EditorJS, { OutputData } from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";
// import { useActionState } from 'next/server';

type Props = {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
};

export default function MyTextEditor({ data, onChange }: Props) {
  const editorRef = useRef<EditorJS | null>(null);
  const [title, setTitle] = useState("");

  //   const { run, state, error } = useActionState(createPost);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (!isMounted) return;

      // ✅ Dynamic imports — load tools only when the component mounts (client-side)
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;
      const Paragraph = (await import("@editorjs/paragraph")).default;
      const ImageTool = (await import("@editorjs/image")).default;
      const LinkTool = (await import("@editorjs/link")).default;
      const Attaches = (await import("@editorjs/attaches")).default;
      const CheckList = (await import("@editorjs/checklist")).default;
      const Table = (await import("@editorjs/table")).default;

      import("@editorjs/editorjs").then(({ default: EditorJS }) => {
        const editor = new EditorJS({
          holder: "editorjs",
          autofocus: true,
          tools: {
            header: Header,
            list: List,
            paragraph: Paragraph,
            table: Table,
            linkTool: LinkTool,
            checkList: CheckList,
            attaches: {
              class: Attaches,
              config: {
                uploader: {
                  uploadByFile: async (file: File) => {
                    const formData = new FormData();
                    formData.append("image", file);
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_URL}/api/upload`,
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
                    return res.json();
                  },
                },
              },
            },
            image: {
              class: ImageTool,
              config: {
                uploader: {
                  uploadByFile: async (file: File) => {
                    const formData = new FormData();
                    formData.append("image", file);
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_URL}/api/upload`,
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
                    return res.json();
                  },
                },
              },
            },
          },
          // data,
          onChange: async () => {
            const content = await editor.save();
            onChange?.(content);
          },
        });
        editorRef.current = editor;
      });
    })();

    return () => {
      isMounted = false;
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  //   const handleSubmit = async () => {
  //     if (!editorRef.current) return;

  //     const content: OutputData = await editorRef.current.save();

  //     run({ title, content }); // pass title + editor content
  //   };

  return (
    <div
      id="editorjs"
      className="border border-[#3832F2]/40 overflow-scroll   h-[60vh] rounded-md p-3"
    />
  );
}
