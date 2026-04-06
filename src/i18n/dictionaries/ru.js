import { SITE_LINKS } from "@/lib/site";

const dictionary = {
    metadata: {
        title: "Портфолио Ильи Абрамова",
        description: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
        siteName: "Портфолио Ильи Абрамова",
    },
    home: {
        header: {
            logoAriaLabel: "На главную",
            primaryLabel: "Разделы сайта:",
            primaryLinks: [
                { href: "#aboutMe", label: "Обо мне↗" },
                { href: "#work", label: "Работа↗" },
                { href: "#clients", label: "Клиенты↗" },
                { href: "#projects", label: "Проекты↗" },
                { href: "#texts", label: "Тексты↗" },
            ],
            secondaryLabel: "А меня можно найти тут:",
            secondaryLinks: [
                { href: SITE_LINKS.email, label: "Email↗" },
                { href: SITE_LINKS.telegram, label: "Telegram↗", external: true },
                { href: SITE_LINKS.dprofile, label: "Dprofile↗", external: true },
                { href: SITE_LINKS.instagram, label: "Insta↗", external: true },
            ],
        },
        about: {
            title: "Обо мне",
            intro: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
            currentPrefix: "Сейчас я в ",
            currentStudio: "Сирене↗",
            currentMiddle: ", креативной инхаус-студии внутри ",
            currentCompany: "Спортса↗",
            pastPrefix: ". Ранее 3 года в самарской сети ",
            pastBrand: "Додо↗",
            pastMiddle: " и агентстве ",
            pastAgency: "Томат↗",
            pastSuffix: " занимался дизайном, арт-дирстом и развитием дизайн-команды.",
            goal: "Стремлюсь стать дизайн-инженером. Изучил HTML+CSS+Vanilla JS. Изучаю Typescript и React+Redux.",
            final: "Я люблю дизайн.",
        },
        follow: {
            cta: "Мой Телеграм-канал↗",
        },
        work: {
            title: "Работа",
            cvLabel: "Скачать CV↗",
            items: [
                { id: 1, workPlace: "UI дизайнер в Сирена // Спортс", workPeriod: "2024 — н.в." },
                { id: 2, workPlace: "Коммуникационный дизайнер в ТОМАТ // Додо", workPeriod: "2021 — 2024" },
                { id: 3, workPlace: "Дизайнер-стажёр в Tactics&Practice", workPeriod: "2019" },
                { id: 4, workPlace: "Дизайнер на фрилансе", workPeriod: "2019 — н.в." },
            ],
        },
        designLibrary: {
            title: "Дизайн-библиотека",
            description: "Курируемая коллекция сайтов дизайнеров и студий.",
            cta: "Перейти ↗",
            href: "https://design-biblioteka.ru/",
        },
        clients: {
            title: "Клиенты",
            ariaLabel: "Клиенты",
        },
        projects: {
            title: "Проекты",
            allLabel: "Все проекты ↗",
        },
        texts: {
            title: "Тексты",
            items: [
                {
                    slug: "dream-layout",
                    title: "Макет мечты vs Реальность кода",
                    description: "Как донести дизайн до разработки и продакшена",
                    linkText: "Читать ↗",
                },
                {
                    slug: "copying",
                    title: "Копируй: Как работает дизайн",
                    description: "Почему копирование важно для обучения и развития",
                    linkText: "Читать ↗",
                },
                {
                    slug: "what-design-is",
                    title: "Что такое дизайн?",
                    description: "Личный поиск смысла и определения дизайна",
                    linkText: "Читать ↗",
                },
            ],
        },
        contact: {
            title: "Связь",
            intro: "Меня цепляют проекты с «зачем»: искусство, наука, спорт, предпринимательство. Открыт к коллаборациям и проектной работе, где можно делать что-то живое и осмысленное.",
            emailLabel: "Email",
            telegramLabel: "Telegram",
            telegramHandle: "@abramovdesiqn↗",
        },
    },
    footer: {
        note: "Designed and developed by Ilya Abramov. Last update March 26",
        toTop: "Перейти наверх↑",
    },
    projectsPage: {
        title: "Все проекты",
        description: "На странице представлены проекты, начиная с 2022 года.",
        back: "← На главную",
    },
    textsPage: {
        back: "←На главную",
        original: "Оригинальная статья↗",
        articleLabel: "Статья",
        translationLabel: "Перевод",
    },
};

export default dictionary;
