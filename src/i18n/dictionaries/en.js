import { SITE_LINKS } from "@/lib/site";

const dictionary = {
    metadata: {
        title: "Ilya Abramov Portfolio",
        description: "I'm Ilya. A web, graphic, and 2D motion designer.",
        siteName: "Ilya Abramov Portfolio",
    },
    home: {
        header: {
            logoAriaLabel: "Home",
            primaryLabel: "Site sections:",
            primaryLinks: [
                { href: "#aboutMe", label: "About↗" },
                { href: "#work", label: "Work↗" },
                { href: "#clients", label: "Clients↗" },
                { href: "#projects", label: "Projects↗" },
                { href: "#texts", label: "Texts↗" },
            ],
            secondaryLabel: "Find me here:",
            secondaryLinks: [
                { href: SITE_LINKS.email, label: "Email↗" },
                { href: SITE_LINKS.telegram, label: "Telegram↗", external: true },
                { href: SITE_LINKS.dprofile, label: "Dprofile↗", external: true },
                { href: SITE_LINKS.instagram, label: "Instagram↗", external: true },
            ],
        },
        about: {
            title: "About",
            intro: "I'm Ilya. A web, graphic, and 2D motion designer.",
            currentPrefix: "Right now I'm at ",
            currentStudio: "Sirena↗",
            currentMiddle: ", the in-house creative studio inside ",
            currentCompany: "Sports.ru↗",
            pastPrefix: ". Before that, I spent three years at the Samara chain ",
            pastBrand: "Dodo↗",
            pastMiddle: " and the agency ",
            pastAgency: "Tomat↗",
            pastSuffix: ", working on design, art direction, and team growth.",
            goal: "I'm moving toward becoming a design engineer. I learned HTML, CSS, and Vanilla JS, and I'm now studying TypeScript and React + Redux.",
            final: "I love design.",
        },
        follow: {
            cta: "My Telegram channel↗",
        },
        work: {
            title: "Work",
            cvLabel: "Download CV↗",
            items: [
                { id: 1, workPlace: "UI Designer at Sirena // Sports.ru", workPeriod: "2024 — now" },
                { id: 2, workPlace: "Communication Designer at TOMAT // Dodo", workPeriod: "2021 — 2024" },
                { id: 3, workPlace: "Design Intern at Tactics&Practice", workPeriod: "2019" },
                { id: 4, workPlace: "Freelance Designer", workPeriod: "2019 — now" },
            ],
        },
        clients: {
            title: "Clients",
            ariaLabel: "Clients",
        },
        projects: {
            title: "Projects",
            allLabel: "All projects ↗",
        },
        texts: {
            title: "Texts",
            items: [
                {
                    slug: "dream-layout",
                    title: "Dream Layout vs Code Reality",
                    description: "How to carry design into development and production",
                    linkText: "Read ↗",
                },
                {
                    slug: "what-design-is",
                    title: "What Is Design?",
                    description: "A personal search for the meaning of design",
                    linkText: "Read ↗",
                },
            ],
        },
        contact: {
            title: "Contact",
            intro: "I'm drawn to projects with a strong why: art, science, sports, entrepreneurship. Open to collaborations and project work where something alive and meaningful can be made.",
            emailLabel: "Email",
            telegramLabel: "Telegram",
            telegramHandle: "@abramovdesiqn↗",
        },
    },
    footer: {
        note: "Designed and developed by Ilya Abramov. Last update March 26",
        toTop: "Back to top↑",
    },
    projectsPage: {
        title: "All projects",
        description: "This page features projects starting from 2022.",
        back: "← Home",
    },
    textsPage: {
        back: "←Home",
        original: "Original article↗",
        articleLabel: "Article",
        translationLabel: "Translation",
    },
};

export default dictionary;
