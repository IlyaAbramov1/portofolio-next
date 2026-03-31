import { defaultLocale } from "./config";
import { loadLocaleModule } from "./loadLocaleModule";

const projectsByLocale = {
    ru: () => import("./content/projects/ru").then((module) => module.default),
    en: () => import("./content/projects/en").then((module) => module.default),
};

export async function getProjects(locale) {
    return loadLocaleModule(projectsByLocale, locale || defaultLocale);
}
