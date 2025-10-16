"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import MyDivider from "../ui/my_divider";

const locales = [
  // We may prefer to use flags instead of emojis, cause emojis are not displaying on some platforms (e.g. linux)
  { code: "fr", label: "Français ", emoji: "🇫🇷", flag: "/flags/fr.svg" },
  { code: "en", label: "English ", emoji: "🇺🇸", flag: "/flags/en.svg" },
];

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchTo = (e: any) => {
    const newLocale = e.target.value;
    const newPath = `/${newLocale}${pathname?.substring(3)}`; // assuming locale is 2 chars
    router.push(newPath);
  };

  return (
    <div className={` items-center gap-2 ${className} `}>
      <select
        className="text-[#9d9d9d] "
        defaultValue={currentLocale}
        onChange={switchTo}
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>

      <MyDivider className="h-5" />

      <Image
        src={
          locales.find((l) => l.code === currentLocale)?.flag || "/flags/us.svg"
        }
        alt="flag"
        width={24}
        height={16}
      />
    </div>
  );
}
