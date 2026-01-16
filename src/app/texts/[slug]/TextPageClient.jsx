"use client";

import { useParams } from "next/navigation";
import Prose from "@/components/mdx/Prose";
import { TEXTS } from "../../../../content/texts/registry";

export default function TextPageClient() {
    const params = useParams();
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    const entry = slug ? TEXTS[slug] : null;

    if (!entry) return null;

    const Content = entry.Content;
    const { header } = entry;

    return (
        <Prose headerProps={header}>
            <Content />
        </Prose>
    );
}
