"use client";

import MyImage from "@/components/image/my_image";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col text-center gap-4">
        <div className="h-[50vh] w-[50vg] ">
          <MyImage imgPath="/assets/svg/err.svg" alt="" />
        </div>
        {/* text */}
        <h1 className="text-4xl font-semibold text-[#111] text-center">
          Erreur de chargement
        </h1>
        <p className="text-base text-[#9d9d9d] ">
          Verifier votre connexion puis ressayer!
        </p>
      </div>
    </div>
  );
}
