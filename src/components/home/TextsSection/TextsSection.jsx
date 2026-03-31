import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";
import { localizeHref } from "@/i18n/utils";
import { SECTION_IDS } from "@/lib/site";

export default function TextsSection({ locale, copy }) {
    return (
        <section id={SECTION_IDS.texts} className="innerContainer">
            <BlockHeader
                iconName="texts"
                title={copy.title}
            />
            {copy.items.map((item) => (
                <ListItem
                    key={item.slug}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    isNew={item.isNew}
                    href={localizeHref(locale, `/texts/${item.slug}`)}
                    linkText={item.linkText}
                />
            ))}
        </section>
    )
}
