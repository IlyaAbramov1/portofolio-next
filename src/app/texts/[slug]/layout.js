import { TEXTS_META } from "../../../../content/texts/meta";

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams?.slug)
        ? resolvedParams.slug[0]
        : resolvedParams?.slug;
    const entry = slug ? TEXTS_META[slug] : null;

    if (!entry) return {};

    return {
        title: entry.title,
        description: entry.description,
        openGraph: {
            title: entry.title,
            description: entry.description,
        },
        twitter: {
            title: entry.title,
            description: entry.description,
        },
    };
}

export default function TextLayout({ children }) {
    return children;
}
