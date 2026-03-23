const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abramovdesign.com";
const lastModified = "2026-03-21T00:00:00.000Z";

export const dynamic = "force-static";

export default function sitemap() {
    const locales = ["ru", "en"];
    const textSlugs = ["dream-layout", "what-design-is", "copying"];

    return locales.flatMap((locale) => [
        {
            url: `${siteUrl}/${locale}`,
            lastModified,
            changeFrequency: "weekly",
            priority: locale === "ru" ? 1 : 0.9,
        },
        {
            url: `${siteUrl}/${locale}/projects`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...textSlugs.map((slug) => ({
            url: `${siteUrl}/${locale}/texts/${slug}`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        })),
    ]);
}
