import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";
import { TEXTS_META } from "../../../../content/texts/meta";

export function generateStaticParams() {
    return Object.keys(TEXTS_META).map((slug) => ({ slug }));
}

export default async function TextPage({ params }) {
    const { slug } = await params;
    redirect(`/${defaultLocale}/texts/${slug}`);
}
