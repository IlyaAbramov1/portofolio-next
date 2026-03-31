import { TEXTS_META } from "../../../../content/texts/meta";
import { createTextMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams?.slug)
        ? resolvedParams.slug[0]
        : resolvedParams?.slug;
    const entry = slug ? TEXTS_META[slug] : null;

    if (!entry) return {};

    return createTextMetadata(entry);
}

export default function TextLayout({ children }) {
    return children;
}
