import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import { withAssetVersion } from "@/lib/assets";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        return {};
    }

    const dictionary = await getDictionary(locale);

    return {
        title: {
            default: dictionary.metadata.title,
            template: "%s",
        },
        description: dictionary.metadata.description,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                ru: "/ru",
                en: "/en",
            },
        },
        openGraph: {
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            url: `https://abramovdesign.com/${locale}`,
            siteName: dictionary.metadata.siteName,
            locale: locale === "ru" ? "ru_RU" : "en_US",
            type: "website",
            images: [
                {
                    url: withAssetVersion("/og-banner.webp"),
                    width: 1200,
                    height: 630,
                    alt: dictionary.metadata.siteName,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            images: [withAssetVersion("/og-banner.webp")],
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    return children;
}
