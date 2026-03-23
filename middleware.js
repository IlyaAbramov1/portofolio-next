import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./src/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const hasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (hasLocale) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
