"use client";

import MyDivider from "@/components/ui/my_divider";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType } from "react";

export default function AsideLink({
  url,
  Icon,
  label,
}: {
  url: string;
  Icon: ElementType;
  label: string;
}) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <Link
      onClick={() =>
        console.log(
          `Navigating to /${currentLocale}${url}/ in locale ${pathname}`
        )
      }
      href={url}
      className={`flex gap-4 p-1 relative nav-link  rounded-sm items-center ${
        `/${currentLocale}${url}/` === `${pathname}`
          ? "  activ-link"
          : "bg-[#edf4fa] "
      }
         `}
    >
      <Icon
        // className={`text-4xl ${
        //   `/${currentLocale}${url}/` === `${pathname}`
        //     ? "text-[#3832F2]"
        //     : "text-[#3832F2]"
        // }  `}
        className=" text-3xl text-[#3832F2]"
      />
      <MyDivider
        // className={` h-5 ${
        //   `/${currentLocale}${url}/` === `${pathname}`
        //     ? "bg-[#3832F2]"
        //     : "bg-[#3832F2]"
        // }`}
        className=" h-5  bg-[#3832F2]"
      />
      <p
        // className={`text-base  ${
        //   `/${currentLocale}${url}/` === `${pathname}`
        //     ? "text-white"
        //     : "text-[#3832F2]"
        // } `}
        className="text-base text-[#3832F2]"
      >
        {label}
      </p>
    </Link>
  );
}
