import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";
import MorphText from "@/components/ui/MorphText/MorphText";
import Reveal from "@/components/ui/Reveal/Reveal";
import { localizeHref } from "@/i18n/utils";
import { inferProjectTagIds, inferProjectYear, PROJECT_ADDITIONAL_TEXT } from "@/lib/project-tags";
import { SECTION_IDS } from "@/lib/site";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ locale, copy, projects }) {
    const projectsItems = projects
        .filter((item) => item.id !== "zima-2023")
        .slice(0, 6);

    return (
        <section id={SECTION_IDS.projects} className="innerContainer">
            <BlockHeader title={copy.title} iconName="projects" />
            {projectsItems.map((item) => (
                <ListItem
                    key={item.id}
                    cover={item.cover}
                    title={item.title}
                    description={item.summary || PROJECT_ADDITIONAL_TEXT}
                    isNew={item.isNew}
                    locale={locale}
                    tagIds={item.tagIds || inferProjectTagIds(item.description)}
                    year={item.year || inferProjectYear(item.description)}
                    href={item.href}
                    hasMedal={item.hasMedal}
                    medalLabel={item.medalLabel}
                />
            ))}
            <Reveal>
                <MorphText>
                    <a href={localizeHref(locale, "/projects")} className={`link ${styles.allProjectsLink}`}>
                        {copy.allLabel}
                    </a>
                </MorphText>
            </Reveal>
        </section>
    )
}
