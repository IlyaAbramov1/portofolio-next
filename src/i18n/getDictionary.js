import { defaultLocale } from "./config";

const dictionaries = {
    ru: () => import("./dictionaries/ru").then((module) => module.default),
    en: () => import("./dictionaries/en").then((module) => module.default),
};

export async function getDictionary(locale) {
    const load = dictionaries[locale] || dictionaries[defaultLocale];
    return load();
}
