import { defaultLocale, locales } from "./config";

export function isValidLocale(locale) {
    return locales.includes(locale);
}

export function getLocaleFromValue(locale) {
    return isValidLocale(locale) ? locale : defaultLocale;
}

function withTrailingSlash(path) {
    if (!path || path === "/") return "/";
    return path.endsWith("/") ? path : `${path}/`;
}

export function localizeHref(locale, href) {
    if (!href) return href;
    if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://")
    ) {
        return href;
    }

    const normalizedLocale = getLocaleFromValue(locale);
    const normalizedHref = href === "/" ? "" : href;

    if (locales.some((item) => normalizedHref === `/${item}` || normalizedHref.startsWith(`/${item}/`))) {
        return withTrailingSlash(normalizedHref || `/${normalizedLocale}`);
    }

    return withTrailingSlash(`/${normalizedLocale}${normalizedHref}`);
}
