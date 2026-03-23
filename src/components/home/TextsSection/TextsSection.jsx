import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";
import { localizeHref } from "@/i18n/utils";

export default function ProjectsSection({ locale, copy }) {
    return (
        <section id="texts" className="innerContainer">
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
