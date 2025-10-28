import LanguageSwitcher from "@/components/langSwitcher/lang_switcher";
import { FaUserCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { FaSignalMessenger } from "react-icons/fa6";

export default function HeaderHome() {
  const t = useTranslations("onBoard.welcome");
  return (
    <div className="px-4 py-2 flex justify-between items-center bg-white fixed top-0 left-0 w-full z-20 lg:px-[5vw] ">
      {/* logo */}
      <div
        className={`py-2 flex justify-center text-2xl md:text-4xl font-black text-[#3832F2]`}
      >
        Edu
        <span className={` text-[#c648f8]`}>App</span>
      </div>
      {/* action btns */}
      <div className="flex gap-4">
        {/* switcher */}
        <div className="hidden md:flex gap-4 items-center mr-4 ">
          <LanguageSwitcher className="flex " />

          <p className="text-[#111] hidden dark:text-white md:block  ">
            {t("1")}
          </p>
        </div>
        <button className="h-10 w-10 rounded-full bg-[#edf4fa] flex justify-center items-center ">
          <FaSignalMessenger className="text-[#3832F2] text-xl md:text-2xl " />
        </button>
        <button className="h-10 w-10 rounded-full bg-[#edf4fa] flex justify-center items-center ">
          <FaUserCircle className="text-[#3832F2] text-xl md:text-2xl " />
        </button>
      </div>
    </div>
  );
}
