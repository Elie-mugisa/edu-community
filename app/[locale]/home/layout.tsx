import AsideMenu from "./homeComponents/aside_menu";
import HeaderHome from "./homeComponents/header_home";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col bg-[#f1f6fa] ">
        {/* //? NAV BAR SECTION */}
        <HeaderHome />

        <div className="flex justify-center w-full ">
          {/* //? ASIDE PC */}
          <AsideMenu />

          {/* //? MAIN home PAGE */}
          <div className="w-full min-h-screen flex ">
            <div className="hidden  lg:w-[15vw] lg:block " />
            <div className="w-full  lg:w-[85vw] ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
