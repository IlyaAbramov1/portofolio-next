import Prose from "@/components/mdx/Prose";
import ListItem from "@/components/ui/ListItem/ListItem";
import styles from "@/components/ui/Header/Header.module.css";

const projects = [
    {
        cover: "/projects/preview/Turbach.webp",
        title: "Турбач",
        description: "Веб-спецпроект | 2025",
        linkText: "Открыть ↗",
        href: "https://sirena.sports.ru/turbach/",
    },
    {
        cover: "/projects/preview/Caps.webp",
        title: "Кэпсы",
        description: "Веб-спецпроект | 2025",
        linkText: "Открыть ↗",
        href: "https://specials.sports.ru/caps/",
    },
    {
        cover: "/projects/preview/2023zima.webp",
        title: "2.0.2.3. зима",
        description: "Веб-сайт | 2025",
        linkText: "Открыть ↗",
        href: "https://2023zima.ru/",
    },
    {
        cover: "/projects/preview/RPL.webp",
        title: "Лига пламенных сердце",
        description: "Веб-спецпроект | 2025",
        linkText: "Открыть ↗",
        href: "https://specials.sports.ru/hearts-league/",
    },
    {
        cover: "/projects/preview/Blast Austin.webp",
        title: "Blast Austin",
        description: "Веб-спецпроект | 2025",
        linkText: "Открыть ↗",
        href: "https://sirena.sports.ru/triumph-major/",
    },
    {
        cover: "/projects/preview/1970_graphic.webp",
        title: "1.9.7.0. Искусство",
        description: "1970 графика искусство — Графика | 2024",
        href: "https://dprofile.ru/case/73460/1970-iskusstvo-art-project",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/BB Dacha.webp",
        title: "BetBoom Dacha Belgrad Test",
        description: "Веб-спецпроект | 2024",
        href: "https://specials.sports.ru/invite-dacha/",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Olimp Predictor.webp",
        title: "Olimp ВХЛ И МХЛ Предиктор",
        description: "Продукт | 2024",
        href: "https://t.me/prognoznahockeyBot/expert",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/dodo film.webp",
        title: "Фильм ДОДО: От и До",
        description: "ДОДО: От и До — Моушн-дизайн | 2024",
        href: "https://vk.com/dodosamara?z=video-37207433_456240388%2Fvideos-37207433%2Fpl_-37207433_-2",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Gold_collection.webp",
        title: "Золотая коллекция",
        description: "Веб-спецпроект | 2024",
        href: "https://www.sports.ru/special/media-collection/",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Mahjong.webp",
        title: "Mahjong",
        description: "Веб-спецпроект | 2024",
        href: "https://specials-stage.cdn.sports.ru/cs-mahjong/",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Daily Poster 3.webp",
        title: "Дейли постеры. Сезон 3",
        description: "Звезда графики — Графика | Июль_23 → Октябрь_23",
        href: "https://dprofile.ru/case/70346/ezednevnye-postery-sezon-3",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Daily Poster 2.webp",
        title: "Дейли постеры. Сезон 2",
        description: "Звезда графики — Графика | Апрель 2023 → Июнь 2023",
        href: "https://dprofile.ru/case/47139/ezednevnye-postery-sezon-2",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Makbush.webp",
        title: "МАКБУШ Кофе",
        description: "Звезда графики — Брендинг | 2023",
        href: "https://dprofile.ru/case/44314/makbush-rebranding-identity",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/kommunalka.webp",
        title: "Коммуналка",
        description: "Звезда графики — Айдентика | 2023",
        href: "https://dprofile.ru/case/38691/dizain-kommunalka-event-identity-showreel",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/makbush-film.webp",
        title: "Фильм МакБуш: 20 лет",
        description: "Сыктывкар - Столица Кофе — Моушн-дизайн | 2023",
        href: "https://vk.com/clubmakbush?z=video-151870760_456239174%2Fvideos-151870760%2Fpl_-151870760_-2",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/Daily Poster 1.webp",
        title: "Дейли постеры. Сезон 1",
        description: "Графика | Январь 2023 → Май 2023",
        href: "https://dprofile.ru/case/29620/ezednevnye-postery-sezon-1",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/tomat_branding.webp",
        title: "Tomat брендинг",
        description: "Tomat Agency — Брендинг | 2022",
        href: "https://dprofile.ru/case/16433/tomat-branding",
        linkText: "Открыть ↗",
    },
    {
        cover: "/projects/preview/tomat_showreel.webp",
        title: "TOMAT SHOWREEL",
        description: "Моушн-дизайн | 2022",
        href: "https://dprofile.ru/case/9668/tomat-2022-showreel",
        linkText: "Открыть ↗",
    },
];

export default function ProjectsPage() {
    const headerProps = {
        bottomSlot: (
            <div className={styles.bottom}>
                <div className="h1">Все проекты</div>
                <div className="text">На странице представлены проекты, начиная с 2022 года.</div>
            </div>
        ),
        secondaryLinks: [{ label: "На главную", href: "/", external: false }],
    };

    return (
        <Prose headerProps={headerProps}>
            {projects.map((item, index) => (
                <ListItem
                    key={`${item.title}-${index}`}
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    linkText={item.linkText}
                />
            ))}
        </Prose>
    );
}
