import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localeFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "Edu-App",
  description: "Online comunity - Espace d’apprentissage et de partage",
};

const myFont = localeFont({
  src: [
    {
      path: "../../public/fonts/Inter_24pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});
// export function generateStaticParams() {
//   return [routing.locales.map((locale) => ({ locale }))];
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // ${rob.variable}
  return (
    <html lang={locale} className="antialiased">
      <body className={myFont.className}>
        <NextIntlClientProvider>
          {children}
          {/* <Analytics /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
