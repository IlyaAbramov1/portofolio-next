import Prose from "@/components/mdx/Prose";
import PageHeaderIntro from "@/components/ui/PageHeaderIntro/PageHeaderIntro";
import ListItem from "@/components/ui/ListItem/ListItem";
import { getFooterProps, getHomePageData } from "@/lib/page-data";

export default async function ProjectsPage({ params }) {
    const { locale } = await params;
    const { dictionary, projects } = await getHomePageData(locale);

    const headerProps = {
        locale,
        bottomSlot: (
            <PageHeaderIntro
                title={dictionary.projectsPage.title}
                description={dictionary.projectsPage.description}
            />
        ),
        secondaryLinks: [{ label: dictionary.projectsPage.back, href: "/", external: false }],
    };

    return (
        <Prose headerProps={headerProps} footerProps={getFooterProps(dictionary)}>
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
