import Prose, { InternalSidebarIntro } from "@/components/mdx/Prose";
import ListItem from "@/components/ui/ListItem/ListItem";
import { inferProjectTagIds, inferProjectYear, PROJECT_ADDITIONAL_TEXT } from "@/lib/project-tags";
import { getFooterProps, getHomePageData } from "@/lib/page-data";

export default async function ProjectsPage({ params }) {
    const { locale } = await params;
    const { dictionary, projects } = await getHomePageData(locale);

    const headerProps = {
        locale,
        secondaryLinks: [{ label: dictionary.projectsPage.back, href: "/", external: false }],
    };

    return (
        <Prose
            footerProps={getFooterProps(dictionary)}
            headerProps={headerProps}
            navigation={{
                backHref: "/",
                backLabel: dictionary.projectsPage.back,
                items: [],
            }}
            sidebarIntro={(
                <InternalSidebarIntro
                    count={projects.length}
                    description={dictionary.projectsPage.description}
                    iconName="projects"
                    title={dictionary.projectsPage.title}
                />
            )}
            variant="projects"
        >
            {projects.map((item) => (
                <ListItem
                    key={item.id}
                    cover={item.cover}
                    title={item.title}
                    description={item.summary || PROJECT_ADDITIONAL_TEXT}
                    href={item.href}
                    isNew={item.isNew}
                    locale={locale}
                    tagIds={item.tagIds || inferProjectTagIds(item.description)}
                    year={item.year || inferProjectYear(item.description)}
                    hasMedal={item.hasMedal}
                    medalLabel={item.medalLabel}
                />
            ))}
        </Prose>
    );
}
