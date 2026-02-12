import Prose from "@/components/mdx/Prose";
import ListItem from "@/components/ui/ListItem/ListItem";
import styles from "@/components/ui/Header/Header.module.css";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
    const headerProps = {
        bottomSlot: (
            <div className={styles.bottom}>
                <div className="h1">Все проекты</div>
                <div className="text">На странице представлены проекты, начиная с 2022 года.</div>
            </div>
        ),
        secondaryLinks: [{ label: "←На главную", href: "/", external: false }],
    };

    return (
        <Prose headerProps={headerProps}>
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
