import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import { createSiteMetadata } from "@/lib/metadata";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        return {};
    }

    const dictionary = await getDictionary(locale);

    return createSiteMetadata({
        title: dictionary.metadata.title,
        description: dictionary.metadata.description,
        siteName: dictionary.metadata.siteName,
        locale,
        canonical: `/${locale}`,
        languages: {
            ru: "/ru",
            en: "/en",
        },
    });
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    return children;
}
