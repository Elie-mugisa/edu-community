import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  //? running first the inl
  const response = intlMiddleware(req);

  const local = req.nextUrl.pathname.split("/")[1];

  const token = req.cookies.get("session")?.value;
  const url = req.nextUrl;

  if (
    token &&
    (url.pathname === "/" ||
      url.pathname.startsWith("/signIn") ||
      url.pathname.startsWith("/signUp"))
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (req.nextUrl.pathname.startsWith(`/${local}/home`)) {
    const token = req.cookies.get("session")?.value;
    // console.log("T O K E N --> ", token);

    if (!token) {
      // redirect if not logged in
      return NextResponse.redirect(new URL("/signIn", req.url));
    }
  }

  //? Return response from intl (or NextResponse.next() if nothing)
  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
