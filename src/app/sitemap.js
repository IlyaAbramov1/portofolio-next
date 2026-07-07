import { TEXTS_META } from "../../content/texts/meta";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

const lastModified = "2026-03-21T00:00:00.000Z";

export const dynamic = "force-static";

export default function sitemap() {
    const textSlugs = Object.keys(TEXTS_META);

    return locales.flatMap((locale) => [
        {
            url: `${SITE_URL}/${locale}`,
            lastModified,
            changeFrequency: "weekly",
            priority: locale === "ru" ? 1 : 0.9,
        },
        {
            url: `${SITE_URL}/${locale}/projects`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...textSlugs.map((slug) => ({
            url: `${SITE_URL}/${locale}/texts/${slug}`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        })),
    ]);
}
