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
            identityTitle: "Илья Абрамов",
            identitySubtitle: "Дизайнер",
            secondaryLabel: "А меня можно найти тут:",
            secondaryLinks: [
                { href: SITE_LINKS.email, label: "Email↗" },
                { href: SITE_LINKS.telegram, label: "Telegram↗", external: true },
                { href: SITE_LINKS.dprofile, label: "Dprofile↗", external: true },
                { href: SITE_LINKS.instagram, label: "Insta↗", external: true },
            ],
        },
        sidebar: {
            contactCta: "Связаться↗",
        },
        about: {
            title: "Обо мне",
            intro: "Привет! Я — Илья. Дизайнер веба, графики и моушна.",
            currentPrefix: "Сейчас лидирую направление дизайна спецпроектов в ",
            currentStudio: "Сирене↗",
            currentMiddle: ", инхаус-студии ",
            currentCompany: "Спортса↗",
            currentAfterCompany: ". Занимаюсь развитием процессов, коллег и проектов. Ранее занимался коммуникациями и дизайн-манагерством в ",
            pastAgency: "Томате↗",
            pastMiddle: ", инхаус студии самарской сети ",
            pastBrand: "Додо↗",
            pastSuffix: ".",
            passion: "Я влюблён в свою профессию. Думаю, не проходит и часа, когда я не думаю о дизайне. Начиная с 2018 года, я стараюсь изучать дизайн в разных направлениях — с помощью книг, курсов, лекций. Поэтому я понимаю в разные направления и могу решать довольно широкий спектр задач — от баннеров в лайтбоксы до спецпроекта только с использованием ИИ. Но на этом я не останавливаюсь.",
            goal: "На данный момент я развиваюсь в коде, чтобы по-тихоньку вырасти в дизайн-инженера. Изучаю React, TS, знаю в HTML, CSS, Vanilla JS.",
            final: "Я очень люблю книги и музыку. Слежу за киберспортом и болею за спирит. А ещё я очень люблю дизайн.",
        },
        work: {
            title: "Работа",
            cvLabel: "Скачать CV↗",
            items: [
                {
                    id: 1,
                    workPlace: "Лид-дизайнер в ",
                    companies: [
                        { label: "Сирена↗", linkKey: "sirena" },
                        { label: "Спортс↗", linkKey: "sports" },
                    ],
                    workPeriod: "2024 — н.в.",
                },
                {
                    id: 2,
                    workPlace: "Коммуникационный дизайнер в ",
                    companies: [
                        { label: "ТОМАТ↗", linkKey: "tomat" },
                        { label: "Додо↗", linkKey: "dodo" },
                    ],
                    workPeriod: "2021 — 2024",
                },
                {
                    id: 3,
                    workPlace: "Дизайнер-стажёр в ",
                    companies: [
                        { label: "Tactics&Practice↗", linkKey: "tacticsPractice" },
                    ],
                    workPeriod: "2019",
                },
                { id: 4, workPlace: "Дизайнер на фрилансе", workPeriod: "2019 — н.в." },
            ],
        },
        designLibrary: {
            title: "Дизайн-библиотека",
            description: "– курируемая коллекция сайтов дизайнеров и студий.",
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
                    year: "2025",
                    description: "Как донести дизайн до разработки и продакшена",
                },
                {
                    slug: "copying",
                    title: "Копируй: Как работает дизайн",
                    year: "2024",
                    description: "Почему копирование важно для обучения и развития",
                },
                {
                    slug: "what-design-is",
                    title: "Что такое дизайн?",
                    year: "2024",
                    description: "Личный поиск смысла и определения дизайна",
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
        note: "Дизайн и код сделал Илья Абрамов. Последнее обновление: июнь 2026",
        toTop: "Перейти наверх↑",
    },
    projectsPage: {
        title: "Проекты",
        description: "На странице представлены проекты, начиная с 2022 года.",
        back: "← На главную",
    },
    textsPage: {
        back: "← На главную",
        original: "Оригинальная статья↗",
        articleLabel: "Статья",
        translationLabel: "Перевод",
    },
};

export default dictionary;
