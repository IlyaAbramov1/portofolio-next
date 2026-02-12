import Link from "next/link";
import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";
import MorphText from "@/components/ui/MorphText/MorphText";
import Reveal from "@/components/ui/Reveal/Reveal";
import projectsData from "@/data/projects.json";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    const projectsItems = projectsData.slice(0, 7);

    return (
        <section id="projects" className="innerContainer">
            <BlockHeader 
                iconName="projects"
                title="Проекты"
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
                    <Link href="/projects" className={`link ${styles.allProjectsLink}`}>
                        Все проекты ↗
                    </Link>
                </MorphText>
            </Reveal>
        </section>
    )
}
