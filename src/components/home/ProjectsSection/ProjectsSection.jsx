import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";
import MorphText from "@/components/ui/MorphText/MorphText";
import Reveal from "@/components/ui/Reveal/Reveal";
import { localizeHref } from "@/i18n/utils";
import { SECTION_IDS } from "@/lib/site";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ locale, copy, projects }) {
    const projectsItems = projects.slice(0, 7);

    return (
        <section id={SECTION_IDS.projects} className="innerContainer">
            <BlockHeader 
                iconName="projects"
                title={copy.title}
            />
            {projectsItems.map((item) => (
                <ListItem
                    key={item.id}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    isNew={item.isNew}
                    href={item.href}
                    linkText={item.linkText}
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
