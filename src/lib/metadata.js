import { withAssetVersion } from "@/lib/assets";
import { SITE_URL, STATIC_FILES } from "@/lib/site";

const LOCALE_TO_OG_LOCALE = {
    ru: "ru_RU",
    en: "en_US",
};

function createSocialMetadata({ title, description, siteName, url, locale, imageAlt }) {
    return {
        openGraph: {
            title,
            description,
            url,
            siteName,
            locale,
            type: "website",
            images: [
                {
                    url: withAssetVersion(STATIC_FILES.ogBanner),
                    width: 1200,
                    height: 630,
                    alt: imageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [withAssetVersion(STATIC_FILES.ogBanner)],
        },
    };
}

export function createSiteMetadata({
    title,
    description,
    siteName,
    locale = "ru",
    canonical = "/",
    languages,
    titleTemplate = "%s",
}) {
    return {
        metadataBase: new URL(SITE_URL),
        title: {
            default: title,
            template: titleTemplate,
        },
        description,
        alternates: {
            canonical,
            ...(languages ? { languages } : {}),
        },
        ...createSocialMetadata({
            title,
            description,
            siteName,
            url: `${SITE_URL}${canonical === "/" ? "" : canonical}`,
            locale: LOCALE_TO_OG_LOCALE[locale] || LOCALE_TO_OG_LOCALE.ru,
            imageAlt: siteName,
        }),
    };
}

export function createTextMetadata({ title, description }) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
        twitter: {
            title,
            description,
        },
    };
}
