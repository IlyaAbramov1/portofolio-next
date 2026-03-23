import { defaultLocale } from "./config";

const projectsByLocale = {
    ru: () => import("./content/projects/ru").then((module) => module.default),
    en: () => import("./content/projects/en").then((module) => module.default),
};

export async function getProjects(locale) {
    const load = projectsByLocale[locale] || projectsByLocale[defaultLocale];
    return load();
}
