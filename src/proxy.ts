import { NextResponse, type NextRequest } from "next/server";

const COMING_SOON_PATH = "/coming-soon";
const HOME_PATH = "/";
const LAUNCH_AT = new Date("2026-08-20T00:00:00+02:00").getTime();

export function proxy(request: NextRequest) {
  const hasLaunched = Date.now() >= LAUNCH_AT;
  const url = request.nextUrl.clone();

  if (hasLaunched) {
    if (request.nextUrl.pathname === COMING_SOON_PATH) {
      url.pathname = HOME_PATH;
      url.search = "";

      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (request.nextUrl.pathname === COMING_SOON_PATH) {
    return NextResponse.next();
  }

  url.pathname = COMING_SOON_PATH;
  url.search = "";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};