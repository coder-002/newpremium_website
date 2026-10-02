import { NextResponse, type NextRequest } from "next/server";

const LANG_PREFIX = /^\/(en|ne)(\/|$)/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (LANG_PREFIX.test(pathname)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
