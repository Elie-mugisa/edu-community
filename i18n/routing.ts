import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr", "en"],

  // Used when no locale matches
  defaultLocale: "fr",
  // localePrefix: 'as-needed' --> I cas i don't want the default locale to appear in the URL
});

// export type Locale = (typeof routing.locales)[number];
// export const { Link, redirect, usePathname, useRouter } =
//   createNavigation(routing);

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
