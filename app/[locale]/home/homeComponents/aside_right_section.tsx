import Tabs from "@/components/ui/custom_tab";
import { RiQuillPenAiFill } from "react-icons/ri";

export default function AsideRightSection() {
  return (
    <div className="hidden h-screen w-[25vw]  fixed justify-center items-start right-0 top-0  md:pt-[5vh] lg:pt-[10vh] md:border-l md:border-slate-300 md:flex ">
      <div className="rounded-sm p-4  min-h-[50vh] w-full flex flex-col items-center justify-center gap-4 ">
        {/* avatar */}
        <div className="h-[16vh] w-[16vh] rounded-full bg-slate-300 "></div>
        <div className="min-h-[50vh] w-full  ">
          <Tabs
            tabs={[
              {
                label: "Galleries",
                content: (
                  <div className="grid grid-cols-3 gap-2">
                    <div className=" flex justify-center items-center min-h-[15vh] p-1 bg-slate-300 rounded-sm">
                      1
                    </div>
                    <div className=" flex justify-center items-center min-h-[15vh] p-1 bg-slate-300 rounded-sm">
                      3
                    </div>
                    <div className=" flex justify-center items-center min-h-[15vh] p-1 bg-slate-300 rounded-sm">
                      3
                    </div>
                    <div className=" flex justify-center items-center min-h-[15vh] p-1 bg-slate-300 rounded-sm">
                      4
                    </div>
                  </div>
                ),
              },
              {
                label: "Followers",
                content: <div></div>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
