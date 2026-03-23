import Prose from "@/components/mdx/Prose";
import ListItem from "@/components/ui/ListItem/ListItem";
import styles from "@/components/ui/Header/Header.module.css";
import { getDictionary } from "@/i18n/getDictionary";
import { getProjects } from "@/i18n/getProjects";

export default async function ProjectsPage({ params }) {
    const { locale } = await params;
    const [dictionary, projects] = await Promise.all([
        getDictionary(locale),
        getProjects(locale),
    ]);

    const headerProps = {
        locale,
        bottomSlot: (
            <div className={styles.bottom}>
                <div className="h1">{dictionary.projectsPage.title}</div>
                <div className="text">{dictionary.projectsPage.description}</div>
            </div>
        ),
        secondaryLinks: [{ label: dictionary.projectsPage.back, href: "/", external: false }],
    };

    return (
        <Prose
            headerProps={headerProps}
            footerProps={{
                note: dictionary.footer.note,
                toTopLabel: dictionary.footer.toTop,
            }}
        >
            {projects.map((item) => (
                <ListItem
                    key={item.id}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    linkText={item.linkText}
                    isNew={item.isNew}
                    hasMedal={item.hasMedal}
                    medalLabel={item.medalLabel}
                />
            ))}
        </Prose>
    );
}
