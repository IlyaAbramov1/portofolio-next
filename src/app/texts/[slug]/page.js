import { TEXTS_META } from "../../../../content/texts/meta";
import TextPageClient from "./TextPageClient";

export function generateStaticParams() {
    return Object.keys(TEXTS_META).map((slug) => ({ slug }));
}

export default function TextPage() {
    return <TextPageClient />;
}
