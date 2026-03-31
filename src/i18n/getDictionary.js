import { defaultLocale } from "./config";
import { loadLocaleModule } from "./loadLocaleModule";

const dictionaries = {
    ru: () => import("./dictionaries/ru").then((module) => module.default),
    en: () => import("./dictionaries/en").then((module) => module.default),
};

export async function getDictionary(locale) {
    return loadLocaleModule(dictionaries, locale || defaultLocale);
}
