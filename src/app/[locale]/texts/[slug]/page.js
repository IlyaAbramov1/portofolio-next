import { notFound } from "next/navigation";
import Prose from "@/components/mdx/Prose";
import { createTextMetadata } from "@/lib/metadata";
import { getTextEntry, getTextStaticParams } from "../../../../../content/texts/registry";

export function generateStaticParams() {
    return getTextStaticParams();
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const entry = await getTextEntry(locale, slug);

    if (!entry) {
        return {};
    }

    return createTextMetadata(entry.meta);
}

export default async function TextPage({ params }) {
    const { locale, slug } = await params;
    const entry = await getTextEntry(locale, slug);

    if (!entry) {
        notFound();
    }

    const Content = await entry.loadContent();

    return (
        <Prose headerProps={{ ...entry.header, locale }} footerProps={entry.footer}>
            <Content />
        </Prose>
    );
}
