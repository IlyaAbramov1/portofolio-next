import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import ListItem from "@/components/ui/ListItem/ListItem";

const projectsItems = [
    {
    cover: "/projects/preview/Caps.webp",
    title: "Турбач",
    description: "Веб-спецпроект | 2025",
    isNew: true,
    linkText: "Подробнее ↗",
    href: "https://sirena.sports.ru/turbach/",
    },
    {
    cover: "/projects/preview/Caps.webp",
    title: "Caps",
    description: "Веб-спецпроект | 2025",
    linkText: "Открыть ↗",
    href: "https://specials.sports.ru/caps/",
    },
    {
    cover: "/projects/preview/2023zima.webp",
    title: "1.9.7.0.",
    description: "Веб-сайт | 2025",
    linkText: "Открыть ↗",
    href: "https://2023zima.ru/",
    },
    {
    cover: "/projects/preview/Gold_collection.webp",
    title: "Золотая коллекция",
    description: "Веб-спецпроект | 2024",
    linkText: "Открыть ↗",
    href: "https://2023zima.ru/",
    },
    {
    cover: "/projects/preview/dodo film.webp",
    title: "Фильм ДОДО: От и До",
    description: "Моушн-дизайн | 2024",
    linkText: "Открыть ↗",
    href: "https://vk.com/dodosamara?z=video-37207433_456240388%2Fvideos-37207433%2Fpl_-37207433_-2",
    },
    {
    cover: "/projects/preview/makbush-film.webp",
    title: "Фильм МакБуш: 20 лет",
    description: "Моушн-дизайн | 2024",
    linkText: "Открыть ↗",
    href: "https://vk.com/clubmakbush?z=video-151870760_456239174%2Fvideos-151870760%2Fpl_-151870760_-2",
    },
];



export default function ProjectsSection() {
    return (
        <section id="projects" className="innerContainer">
            <BlockHeader 
                iconName="projects"
                title="Проекты"
            />
            {projectsItems.map((item) => (
                <ListItem
                    key={item.title}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    isNew={item.isNew}
                    href={item.href}
                    linkText={item.linkText}
                />
            ))}
        </section>
    )
}
