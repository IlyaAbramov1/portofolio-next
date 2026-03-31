import { TEXTS_META } from "./meta";
import { locales } from "@/i18n/config";
import { localizeHref } from "@/i18n/utils";
import { getDictionary } from "@/i18n/getDictionary";
import PageHeaderIntro from "@/components/ui/PageHeaderIntro/PageHeaderIntro";
import { getFooterProps } from "@/lib/page-data";

const TEXTS = {
    "dream-layout": {
        loadContentByLocale: {
            ru: () => import("./dream-layout.mdx").then((module) => module.default),
            en: () => import("./dream-layout.en.mdx").then((module) => module.default),
        },
        localizations: {
            ru: {
                meta: TEXTS_META["dream-layout"],
                title: "Макет мечты vs Реальность кода",
                kind: "Статья",
                year: "2025",
                description: "О том, как дизайнеру говорить с разработкой на одном языке и доводить идеи до точной реализации.",
            },
            en: {
                meta: {
                    title: "Dream Layout vs Code Reality",
                    description: "How designers can speak with development in the same language and reach precise implementation.",
                },
                title: "Dream Layout vs Code Reality",
                kind: "Article",
                year: "2025",
                description: "How designers can speak with development in the same language and reach precise implementation.",
            },
        },
    },
    "what-design-is": {
        loadContentByLocale: {
            ru: () => import("./what-desing-is.mdx").then((module) => module.default),
            en: () => import("./what-design-is.en.mdx").then((module) => module.default),
        },
        localizations: {
            ru: {
                meta: TEXTS_META["what-design-is"],
                title: "Что такое дизайн?",
                kind: "Статья",
                year: "2024",
                description: "Моя статья о том, как на личном профессиональном опыте я пытаюсь сформулировать, что такое дизайн и в чём его смысл. Это попытка честной рефлексии о профессии и её ценности в реальных условиях работы.",
            },
            en: {
                meta: {
                    title: "What Is Design?",
                    description: "A personal reflection on what design is and why it matters in real work conditions.",
                },
                title: "What Is Design?",
                kind: "Article",
                year: "2024",
                description: "A personal reflection on what design is and why it matters in real work conditions.",
            },
        },
    },
    "copying": {
        loadContentByLocale: {
            ru: () => import("./copying.mdx").then((module) => module.default),
            en: () => import("./copying.mdx").then((module) => module.default),
        },
        localizations: {
            ru: {
                meta: TEXTS_META["copying"],
                title: "Копируй: Как работает дизайн",
                kind: "Перевод",
                year: "2024",
                description: "Перевод статьи Мэтью Штрома, выполненный мною в 2024 году. Статья фундаментальная. Рекомендую ознакомиться также с оригиналом. Отдельная благодарность за помощь Диме Уланову.",
            },
            en: {
                meta: {
                    title: "Copying: How Design Works",
                    description: "My 2024 translation of Matthew Strom's article about why copying matters in design.",
                },
                title: "Copying: How Design Works",
                kind: "Translation",
                year: "2024",
                description: "My 2024 translation of Matthew Strom's article about why copying matters in design.",
            },
        },
        originalHref: "https://mattstromawn.com/writing/copying/",
    },
};

export function getTextStaticParams() {
    return locales.flatMap((locale) =>
        Object.keys(TEXTS).map((slug) => ({ locale, slug }))
    );
}

export async function getTextEntry(locale, slug) {
    const dictionary = await getDictionary(locale);
    const entry = TEXTS[slug];

    if (!entry) {
        return null;
    }

    const localizedEntry = entry.localizations[locale] || entry.localizations.ru;
    const loadContent =
        entry.loadContentByLocale[locale] || entry.loadContentByLocale.ru;
    const secondaryLinks = [
        { label: dictionary.textsPage.back, href: "/", external: false },
    ];

    if (entry.originalHref) {
        secondaryLinks.push({
            label: dictionary.textsPage.original,
            href: entry.originalHref,
            external: true,
        });
    }

    return {
        meta: localizedEntry.meta,
        loadContent,
        header: {
            locale,
            bottomSlot: (
                <PageHeaderIntro
                    title={localizedEntry.title}
                    subtitle={`${localizedEntry.kind} | ${localizedEntry.year}`}
                    description={localizedEntry.description}
                />
            ),
            secondaryLinks,
        },
        footer: getFooterProps(dictionary),
        href: localizeHref(locale, `/texts/${slug}`),
    };
}
